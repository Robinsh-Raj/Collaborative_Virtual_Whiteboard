import React, { Component } from 'react';
import Board from '../board/Board';
import './style.css';

class DrawingBoard extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      isDrawing: false,
      drawingTool: 'pencil',
      color: '#000000', // Default color: black
      size: '5', // Default size
    };
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = this.state.color;
    context.lineWidth = this.state.size;
    context.lineCap = 'round'; // Smooth line edges

    if (this.state.drawingTool === 'eraser') {
      context.globalCompositeOperation = 'destination-out'; // Set eraser mode
    } else {
      context.globalCompositeOperation = 'source-over'; // Default drawing mode
    }
  }

  startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = this.canvasRef.current.getContext('2d');
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    this.setState({ isDrawing: true });
  };

  draw = ({ nativeEvent }) => {
    if (!this.state.isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = this.canvasRef.current.getContext('2d');
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  stopDrawing = () => {
    const context = this.canvasRef.current.getContext('2d');
    context.closePath();
    this.setState({ isDrawing: false });
  };

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handleToolChange = (event) => {
    const { value } = event.target;
    const context = this.canvasRef.current.getContext('2d');

    if (value === 'eraser') {
      context.globalCompositeOperation = 'destination-out'; // Set eraser mode
    } else {
      context.globalCompositeOperation = 'source-over'; // Default drawing mode
    }

    this.setState({ drawingTool: value });
  };

  render() {
    const { isDrawing, drawingTool, color, size } = this.state;

    return (
      <div className="container">
        <div class="tools-section">
          <div>
            <button onClick={this.handleToolChange} value="pencil">Pencil</button>
            <button onClick={this.handleToolChange} value="brush">Brush</button>
            <button onClick={this.handleToolChange} value="eraser">Eraser</button>
            <input type="color" onChange={this.handleColorChange} value={color} />
            <input type="range" min="1" max="50" value={size} onChange={this.handleSizeChange} />
          </div>
          <canvas
            ref={this.canvasRef}
            width="800"
            height="600"
            onMouseDown={this.startDrawing}
            onMouseMove={this.draw}
            onMouseUp={this.stopDrawing}
            onMouseLeave={this.stopDrawing}
            style={{ border: '1px solid black', backgroundColor: 'white' }}
          />
        </div>

        <div class="board-container">
          <Board color={color} size={size} />
        </div>
      </div>
    );
  }
}

export default DrawingBoard;