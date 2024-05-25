import React, { Component } from "react";
import Board from "../board/Board";

class VirtualWhiteboard extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.contextRef = React.createRef();
    this.toolSelectRef = React.createRef();
    this.textBoxRef = React.createRef();
    this.imageInputRef = React.createRef();

    this.state = {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      tool: "pen",
      shapes: [],
      drag: false,
      dragStartX: 0,
      dragStartY: 0
    };
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    this.contextRef.current = context;

    this.canvasRef.current.addEventListener("mousedown", this.handleMouseDown);
    this.canvasRef.current.addEventListener("mousemove", this.handleMouseMove);
    this.canvasRef.current.addEventListener("mouseup", this.handleMouseUp);
    document.getElementById("toolSelect").addEventListener("change", this.updateTool);
    document.getElementById("textBox").addEventListener("change", this.updateText);
  }

  componentWillUnmount() {
    this.canvasRef.current.removeEventListener("mousedown", this.handleMouseDown);
    this.canvasRef.current.removeEventListener("mousemove", this.handleMouseMove);
    this.canvasRef.current.removeEventListener("mouseup", this.handleMouseUp);
    document.getElementById("toolSelect").removeEventListener("change", this.updateTool);
    document.getElementById("textBox").removeEventListener("change", this.updateText);
  }

  draw = e => {
    const { isDrawing, tool, contextRef } = this;

    if (!isDrawing) return;

    const canvas = contextRef.current;
    const context = canvas.getContext("2d");

    context.lineWidth = 2;
    context.strokeStyle = "#000";
    context.fillStyle = "#000";

    if (tool === "pen") {
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      this.setState({
        lastX: e.offsetX,
        lastY: e.offsetY
      });
    } else if (tool === "line") {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(this.state.lastX, this.state.lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
    } else if (tool === "rectangle") {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.rect(this.state.lastX, this.state.lastY, e.offsetX - this.state.lastX, e.offsetY - this.state.lastY);
      context.stroke();
    } else if (tool === "circle") {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const radius = Math.sqrt(Math.pow(e.offsetX - this.state.lastX, 2) + Math.pow(e.offsetY - this.state.lastY, 2));
      context.beginPath();
      context.arc(this.state.lastX, this.state.lastY, radius, 0, Math.PI * 2);
      context.stroke();
    }
  };

  handleMouseDown = e => {
    this.setState({
      isDrawing: true,
      drag: true
    });

    if (this.state.tool !== "pen") {
      this.setState({
        lastX: e.offsetX,
        lastY: e.offsetY
      });
    }

    if (this.state.tool === "line" || this.state.tool === "rectangle" || this.state.tool === "circle") {
      this.setState({dragStartX: e.offsetX,
        dragStartY: e.offsetY
      });
    }
  };

  handleMouseMove = e => {
    if (this.state.isDrawing) {
      this.draw(e);
    }

    if (this.state.drag) {
      const { dragStartX, dragStartY, tool } = this.state;

      if (tool === "line") {
        this.contextRef.current.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
        this.contextRef.current.beginPath();
        this.contextRef.current.moveTo(dragStartX, dragStartY);
        this.contextRef.current.lineTo(e.offsetX, e.offsetY);
        this.contextRef.current.stroke();
      } else if (
        tool === "rectangle" ||
        tool === "circle"
      ) {
        this.contextRef.current.clearRect(
          0,
          0,
          this.canvasRef.current.width,
          this.canvasRef.current.height
        );

        if (tool === "rectangle") {
          this.contextRef.current.beginPath();
          this.contextRef.current.rect(
            dragStartX,
            dragStartY,
            e.offsetX - dragStartX,
            e.offsetY - dragStartY
          );
          this.contextRef.current.stroke();
        } else if (tool === "circle") {
          const radius = Math.sqrt(
            Math.pow(e.offsetX - dragStartX, 2) +
              Math.pow(e.offsetY - dragStartY, 2)
          );

          this.contextRef.current.beginPath();
          this.contextRef.current.arc(
            dragStartX,
            dragStartY,
            radius,
            0,
            Math.PI * 2
          );
          this.contextRef.current.stroke();
        }
      }
    }
  };

  handleMouseUp = e => {
    if (this.state.tool === "line" || this.state.tool === "rectangle" || this.state.tool === "circle") {
      this.setState({
        shapes: [
          ...this.state.shapes,
          {
            type: this.state.tool,
            startX: this.state.dragStartX,
            startY: this.state.dragStartY,
            endX: e.offsetX,
            endY: e.offsetY
          }
        ],
        drag: false
      });
    }

    this.setState({
      isDrawing: false
    });
  };

  handleClearBtnClick = () => {
    this.contextRef.current.clearRect(
      0,
      0,
      this.canvasRef.current.width,
      this.canvasRef.current.height
    );

    this.setState({
      shapes: []
    });
  };

  handleEraserBtnClick = () => {
    this.setState({
      tool: "eraser"
    });
  };

  handleImageInputChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        this.contextRef.current.drawImage(img, 0, 0);
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  handleSaveBtnClick = () => {
    const canvas = this.canvasRef.current;
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");

    link.href = image;
    link.download = "whiteboard.png";
    link.click();
  };

  updateText = () => {
    if (this.textBoxRef.current) {
      const text = this.textBoxRef.current.value;
      const canvas = this.canvasRef.current;
      const context = canvas.getContext("2d");

      context.font= "16px Arial";
      context.fillText(text, this.state.lastX, this.state.lastY);

      this.setState({
        tool: "pen"
      });
    }
  };

  updateTool = () => {
    if (this.toolSelectRef.current) {
      this.setState({
        tool: this.toolSelectRef.current.value
      });
    }
  };

  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold mb-8 text-center">
            Virtual Whiteboard
          </h1>

          <div
            className="border border-green-300 rounded-lg mb-6 p-4 relative"
            onMouseMove={this.handleMouseMove}
          >
            <div className="flex justify-center items-center">
              <canvas
                ref={this.canvasRef}
                width="700"
                height="500"
              />
            </div>
            <div className="absolute top-0 right-0 p-2">
              <button
                id="clearBtn"
                className="px-4 py-2 bg-blue-500  rounded-lg hover:bg-blue-600"
                onClick={this.handleClearBtnClick}
              >
                Clear
              </button>
              <button
                id="eraserBtn"
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={this.handleEraserBtnClick}
              >
                Eraser
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="relative flex items-center">
              <label htmlFor="toolSelect" className="mr-2">
                Tool:
              </label>
              <select
                id="toolSelect"
                className="px-3 py-2 bg-gray-200 rounded-lg appearance-none"
                ref={this.toolSelectRef}
                onChange={this.updateTool}
              >
                <option value="pen">Pen</option>
                <option value="line">Line</option>
                <option value="rectangle">Rectangle</option>
                <option value="circle">Circle</option>
                <option value="text">Text</option>
              </select>
            </div>
            <div>
              <button
                id="saveBtn"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={this.handleSaveBtnClick}
              >
                Save
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                ref={this.imageInputRef}
                onChange={this.handleImageInputChange}
              />
              <button
                id="imageBtn"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                onClick={() => this.imageInputRef.current.click()}
              >
                Insert Image
              </button>
            </div>
          </div>

          <div id="textInput" className="mb-4 hidden">
            <input
              type="text"
              id="textBox"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
              ref={this.textBoxRef}
            />
            <button
              id="textBtn"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={this.updateText}
            >
              Add Text
            </button>
         </div>
        </div>

        <div className="board-container" >
                    <Board color={this.state.color} size={this.state.size} />
                </div>

      </div>
    );
  }
}

export default VirtualWhiteboard;