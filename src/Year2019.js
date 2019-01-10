import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_429 from './assets/2019-01-06-18-10-22.mp4';
import img_429 from './assets/2019-01-06-18-10-22.mp4.png';
import video_430 from './assets/2019-01-09-17-43-51.mp4';
import img_430 from './assets/2019-01-09-17-43-51.mp4.png';
import video_431 from './assets/2019-01-09-17-45-13.mp4';
import img_431 from './assets/2019-01-09-17-45-13.mp4.png';
import video_432 from './assets/2019-01-10-00-39-02.mp4';
import img_432 from './assets/2019-01-10-00-39-02.mp4.png';

export default class Year20189 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_429,
      image: img_429,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video || (prevState.mode !== 'video' && this.state.mode === 'video')) {
      this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
      
    } else if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
    if (this.state.mode === 'video') {
      return (
          <Player ref="player" loop fluid={ false } width={ 350 }>
              <source src={ this.state.video } />
          </Player>
      )
    } else if (this.state.mode === 'image') {
      return (<img className="gallery" src={ this.state.image } />)
    }
  }

  toggleImageSize = () => {
    if (this.state.picSizeMode === 'narrow') {
        this.setState({ picSizeMode: 'wider' })
    } else {
      this.setState({ picSizeMode: 'narrow' })
    }
  }  

  render() {
    return (
        <div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
                <div style={ { padding: '1vh' } }>
                    {this.renderImageOrVideoContainer()}
                </div>
                {this.state.oldY === 0 ? '' : (
                    <div padding={ { padding: '2vh' } } onClick={ () => this.scrollBackDown() } >
                        <button className="pure-button pure-button-primary">Return to previous position</button>
                    </div>
        )}
            </div>
            <div onClick={ () => this.toggleImageSize() } style={ { position: 'fixed', width: 50, height: 30, bottom: 40, right: 40  } }>
                <button className="pure-button pure-button-secondary">X</button>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_429 }) }>
                    <img src={ img_429 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_430 }) }>
                    <img src={ img_430 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_431 }) }>
                    <img src={ img_431 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_432 }) }>
                    <img src={ img_432 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
