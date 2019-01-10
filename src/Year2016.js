import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './assets/2016-08-10 465.mp4';
import img_0 from './assets/2016-08-10 465.mp4.png';
import video_1 from './assets/2016-08-10 485.mp4';
import img_1 from './assets/2016-08-10 485.mp4.png';
import video_2 from './assets/2016-08-26 452.mp4';
import img_2 from './assets/2016-08-26 452.mp4.png';
import video_3 from './assets/2016-09-04 293.mp4';
import img_3 from './assets/2016-09-04 293.mp4.png';
import video_4 from './assets/2016-09-04 458.mp4';
import img_4 from './assets/2016-09-04 458.mp4.png';
import video_5 from './assets/2016-09-11 383.mp4';
import img_5 from './assets/2016-09-11 383.mp4.png';
import video_6 from './assets/2016-10-02 349.mp4';
import img_6 from './assets/2016-10-02 349.mp4.png';
import video_7 from './assets/2016-10-15 217.mp4';
import img_7 from './assets/2016-10-15 217.mp4.png';
import video_8 from './assets/2016-10-20 2.mp4';
import img_8 from './assets/2016-10-20 2.mp4.png';
import video_9 from './assets/2016-10-22 365.mp4';
import img_9 from './assets/2016-10-22 365.mp4.png';
import video_10 from './assets/2016-11-03 140.mp4';
import img_10 from './assets/2016-11-03 140.mp4.png';
import video_11 from './assets/2016-11-03 378.mp4';
import img_11 from './assets/2016-11-03 378.mp4.png';
import video_12 from './assets/2016-11-11 158.mp4';
import img_12 from './assets/2016-11-11 158.mp4.png';
import video_13 from './assets/2016-11-12 160.mp4';
import img_13 from './assets/2016-11-12 160.mp4.png';
import video_14 from './assets/2016-11-12 312.mp4';
import img_14 from './assets/2016-11-12 312.mp4.png';
import video_15 from './assets/2016-11-17 427.mp4';
import img_15 from './assets/2016-11-17 427.mp4.png';
import video_16 from './assets/2016-11-23 95.mp4';
import img_16 from './assets/2016-11-23 95.mp4.png';
import video_17 from './assets/2016-11-26 174.mp4';
import img_17 from './assets/2016-11-26 174.mp4.png';
import video_18 from './assets/2016-12-04 140.mp4';
import img_18 from './assets/2016-12-04 140.mp4.png';
import video_19 from './assets/2016-12-04 32.mp4';
import img_19 from './assets/2016-12-04 32.mp4.png';
import video_20 from './assets/2016-12-09 219.mp4';
import img_20 from './assets/2016-12-09 219.mp4.png';
import video_21 from './assets/2016-12-17 101.mp4';
import img_21 from './assets/2016-12-17 101.mp4.png';
import video_22 from './assets/2016-12-17 300.mp4';
import img_22 from './assets/2016-12-17 300.mp4.png';
import video_23 from './assets/2016-12-18 298.mp4';
import img_23 from './assets/2016-12-18 298.mp4.png';
import video_24 from './assets/2016-12-19 491.mp4';
import img_24 from './assets/2016-12-19 491.mp4.png';
import video_25 from './assets/2016-12-21 85.mp4';
import img_25 from './assets/2016-12-21 85.mp4.png';
import video_26 from './assets/2016-12-27 26.mp4';
import img_26 from './assets/2016-12-27 26.mp4.png';

export default class Year2016 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_0,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_0 }) }>
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_1 }) }>
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_2 }) }>
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_3 }) }>
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_4 }) }>
                    <img src={ img_4 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_5 }) }>
                    <img src={ img_5 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_6 }) }>
                    <img src={ img_6 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_7 }) }>
                    <img src={ img_7 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_8 }) }>
                    <img src={ img_8 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_9 }) }>
                    <img src={ img_9 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_10 }) }>
                    <img src={ img_10 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_11 }) }>
                    <img src={ img_11 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_12 }) }>
                    <img src={ img_12 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_13 }) }>
                    <img src={ img_13 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_14 }) }>
                    <img src={ img_14 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_15 }) }>
                    <img src={ img_15 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_16 }) }>
                    <img src={ img_16 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_17 }) }>
                    <img src={ img_17 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_18 }) }>
                    <img src={ img_18 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_19 }) }>
                    <img src={ img_19 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_20 }) }>
                    <img src={ img_20 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_21 }) }>
                    <img src={ img_21 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_22 }) }>
                    <img src={ img_22 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_23 }) }>
                    <img src={ img_23 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_24 }) }>
                    <img src={ img_24 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_25 }) }>
                    <img src={ img_25 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_26 }) }>
                    <img src={ img_26 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
