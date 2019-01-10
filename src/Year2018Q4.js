import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_389 from './assets/2018-09-17-18-02-59.mp4';
import img_389 from './assets/2018-09-17-18-02-59.mp4.png';
import video_390 from './assets/2018-09-19-18-07-15.mp4';
import img_390 from './assets/2018-09-19-18-07-15.mp4.png';
import video_391 from './assets/2018-09-22-17-41-36.mp4';
import img_391 from './assets/2018-09-22-17-41-36.mp4.png';
import video_392 from './assets/2018-09-26-17-31-25.mp4';
import img_392 from './assets/2018-09-26-17-31-25.mp4.png';
import video_393 from './assets/2018-10-03-17-43-52.mp4';
import img_393 from './assets/2018-10-03-17-43-52.mp4.png';
import video_394 from './assets/2018-10-07-12-42-43.mp4';
import img_394 from './assets/2018-10-07-12-42-43.mp4.png';
import video_395 from './assets/2018-10-09-17-11-54.mp4';
import img_395 from './assets/2018-10-09-17-11-54.mp4.png';
import video_396 from './assets/2018-10-09-17-28-42.mp4';
import img_396 from './assets/2018-10-09-17-28-42.mp4.png';
import video_397 from './assets/2018-10-13-22-32-03.mp4';
import img_397 from './assets/2018-10-13-22-32-03.mp4.png';
import video_398 from './assets/2018-10-13-22-33-26.mp4';
import img_398 from './assets/2018-10-13-22-33-26.mp4.png';
import video_399 from './assets/2018-10-14-16-00-24.mp4';
import img_399 from './assets/2018-10-14-16-00-24.mp4.png';
import video_400 from './assets/2018-10-29-19-18-25.mp4';
import img_400 from './assets/2018-10-29-19-18-25.mp4.png';
import video_401 from './assets/2018-10-31-20-58-43.mp4';
import img_401 from './assets/2018-10-31-20-58-43.mp4.png';
import video_402 from './assets/2018-11-05-17-35-43.mp4';
import img_402 from './assets/2018-11-05-17-35-43.mp4.png';
import video_403 from './assets/2018-11-08-18-03-42.mp4';
import img_403 from './assets/2018-11-08-18-03-42.mp4.png';
import video_404 from './assets/2018-11-08-18-04-46.mp4';
import img_404 from './assets/2018-11-08-18-04-46.mp4.png';
import video_405 from './assets/2018-11-09-19-46-09.mp4';
import img_405 from './assets/2018-11-09-19-46-09.mp4.png';
import video_406 from './assets/2018-11-13-19-33-37.mp4';
import img_406 from './assets/2018-11-13-19-33-37.mp4.png';
import video_407 from './assets/2018-11-17-18-44-46.mp4';
import img_407 from './assets/2018-11-17-18-44-46.mp4.png';
import video_408 from './assets/2018-11-19-17-59-21.mp4';
import img_408 from './assets/2018-11-19-17-59-21.mp4.png';
import video_409 from './assets/2018-11-19-18-00-46.mp4';
import img_409 from './assets/2018-11-19-18-00-46.mp4.png';
import video_410 from './assets/2018-11-20-19-09-32.mp4';
import img_410 from './assets/2018-11-20-19-09-32.mp4.png';
import video_411 from './assets/2018-11-25-10-06-38.mp4';
import img_411 from './assets/2018-11-25-10-06-38.mp4.png';
import video_412 from './assets/2018-11-25-14-40-12.mp4';
import img_412 from './assets/2018-11-25-14-40-12.mp4.png';
import video_413 from './assets/2018-11-27-21-15-20.mp4';
import img_413 from './assets/2018-11-27-21-15-20.mp4.png';
import video_414 from './assets/2018-12-01-15-39-20.mp4';
import img_414 from './assets/2018-12-01-15-39-20.mp4.png';
import video_415 from './assets/2018-12-01-22-49-42.mp4';
import img_415 from './assets/2018-12-01-22-49-42.mp4.png';
import video_416 from './assets/2018-12-01-23-26-58.mp4';
import img_416 from './assets/2018-12-01-23-26-58.mp4.png';
import video_417 from './assets/2018-12-03-18-17-11.mp4';
import img_417 from './assets/2018-12-03-18-17-11.mp4.png';
import video_418 from './assets/2018-12-04-18-19-34.mp4';
import img_418 from './assets/2018-12-04-18-19-34.mp4.png';
import video_419 from './assets/2018-12-04-18-20-38.mp4';
import img_419 from './assets/2018-12-04-18-20-38.mp4.png';
import video_420 from './assets/2018-12-07-18-44-33.mp4';
import img_420 from './assets/2018-12-07-18-44-33.mp4.png';
import video_421 from './assets/2018-12-07-19-56-36.mp4';
import img_421 from './assets/2018-12-07-19-56-36.mp4.png';
import video_422 from './assets/2018-12-16-17-44-29.mp4';
import img_422 from './assets/2018-12-16-17-44-29.mp4.png';
import video_423 from './assets/2018-12-19-18-12-24.mp4';
import img_423 from './assets/2018-12-19-18-12-24.mp4.png';
import video_424 from './assets/2018-12-26-00-39-15.mp4';
import img_424 from './assets/2018-12-26-00-39-15.mp4.png';
import video_425 from './assets/2018-12-28-16-10-58.mp4';
import img_425 from './assets/2018-12-28-16-10-58.mp4.png';
import video_426 from './assets/2018-12-28-16-12-43.mp4';
import img_426 from './assets/2018-12-28-16-12-43.mp4.png';
import video_427 from './assets/2018-12-28-16-16-44.mp4';
import img_427 from './assets/2018-12-28-16-16-44.mp4.png';
import video_428 from './assets/2018-12-30-18-04-54.mp4';
import img_428 from './assets/2018-12-30-18-04-54.mp4.png';

export default class Year2018Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_389,
      image: img_389,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_389 }) }>
                    <img src={ img_389 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_390 }) }>
                    <img src={ img_390 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_391 }) }>
                    <img src={ img_391 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_392 }) }>
                    <img src={ img_392 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_393 }) }>
                    <img src={ img_393 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_394 }) }>
                    <img src={ img_394 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_395 }) }>
                    <img src={ img_395 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_396 }) }>
                    <img src={ img_396 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_397 }) }>
                    <img src={ img_397 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_398 }) }>
                    <img src={ img_398 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_399 }) }>
                    <img src={ img_399 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_400 }) }>
                    <img src={ img_400 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_401 }) }>
                    <img src={ img_401 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_402 }) }>
                    <img src={ img_402 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_403 }) }>
                    <img src={ img_403 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_404 }) }>
                    <img src={ img_404 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_405 }) }>
                    <img src={ img_405 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_406 }) }>
                    <img src={ img_406 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_407 }) }>
                    <img src={ img_407 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_408 }) }>
                    <img src={ img_408 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_409 }) }>
                    <img src={ img_409 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_410 }) }>
                    <img src={ img_410 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_411 }) }>
                    <img src={ img_411 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_412 }) }>
                    <img src={ img_412 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_413 }) }>
                    <img src={ img_413 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_414 }) }>
                    <img src={ img_414 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_415 }) }>
                    <img src={ img_415 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_416 }) }>
                    <img src={ img_416 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_417 }) }>
                    <img src={ img_417 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_418 }) }>
                    <img src={ img_418 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_419 }) }>
                    <img src={ img_419 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_420 }) }>
                    <img src={ img_420 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_421 }) }>
                    <img src={ img_421 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_422 }) }>
                    <img src={ img_422 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_423 }) }>
                    <img src={ img_423 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_424 }) }>
                    <img src={ img_424 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_425 }) }>
                    <img src={ img_425 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_426 }) }>
                    <img src={ img_426 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_427 }) }>
                    <img src={ img_427 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_428 }) }>
                    <img src={ img_428 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
