import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_340 from './assets/2018-07-03-18-21-16.mp4';
import img_340 from './assets/2018-07-03-18-21-16.mp4.png';
import video_341 from './assets/2018-07-04-17-53-39.mp4';
import img_341 from './assets/2018-07-04-17-53-39.mp4.png';
import video_342 from './assets/2018-07-07-17-16-46.mp4';
import img_342 from './assets/2018-07-07-17-16-46.mp4.png';
import video_343 from './assets/2018-07-07-17-19-12.mp4';
import img_343 from './assets/2018-07-07-17-19-12.mp4.png';
import video_344 from './assets/2018-07-09-16-27-59.mp4';
import img_344 from './assets/2018-07-09-16-27-59.mp4.png';
import video_345 from './assets/2018-07-09-17-33-52.mp4';
import img_345 from './assets/2018-07-09-17-33-52.mp4.png';
import video_346 from './assets/2018-07-09-17-37-18.mp4';
import img_346 from './assets/2018-07-09-17-37-18.mp4.png';
import video_347 from './assets/2018-07-13-17-33-46.mp4';
import img_347 from './assets/2018-07-13-17-33-46.mp4.png';
import video_348 from './assets/2018-07-13-17-41-16.mp4';
import img_348 from './assets/2018-07-13-17-41-16.mp4.png';
import video_349 from './assets/2018-07-17-22-06-45.mp4';
import img_349 from './assets/2018-07-17-22-06-45.mp4.png';
import video_350 from './assets/2018-07-17-22-07-16.mp4';
import img_350 from './assets/2018-07-17-22-07-16.mp4.png';
import video_351 from './assets/2018-07-17-22-08-22.mp4';
import img_351 from './assets/2018-07-17-22-08-22.mp4.png';
import video_352 from './assets/2018-07-18-17-37-30.mp4';
import img_352 from './assets/2018-07-18-17-37-30.mp4.png';
import video_353 from './assets/2018-07-18-17-50-02.mp4';
import img_353 from './assets/2018-07-18-17-50-02.mp4.png';
import video_354 from './assets/2018-07-19-17-20-19.mp4';
import img_354 from './assets/2018-07-19-17-20-19.mp4.png';
import video_355 from './assets/2018-07-19-17-23-07.mp4';
import img_355 from './assets/2018-07-19-17-23-07.mp4.png';
import video_356 from './assets/2018-07-20-17-07-04.mp4';
import img_356 from './assets/2018-07-20-17-07-04.mp4.png';
import video_357 from './assets/2018-07-20-17-14-39.mp4';
import img_357 from './assets/2018-07-20-17-14-39.mp4.png';
import video_358 from './assets/2018-07-20-17-16-26.mp4';
import img_358 from './assets/2018-07-20-17-16-26.mp4.png';
import video_359 from './assets/2018-07-20-17-17-21.mp4';
import img_359 from './assets/2018-07-20-17-17-21.mp4.png';
import video_360 from './assets/2018-07-23-17-46-30.mp4';
import img_360 from './assets/2018-07-23-17-46-30.mp4.png';
import video_361 from './assets/2018-07-25-17-49-44.mp4';
import img_361 from './assets/2018-07-25-17-49-44.mp4.png';
import video_362 from './assets/2018-07-29-17-41-11.mp4';
import img_362 from './assets/2018-07-29-17-41-11.mp4.png';
import video_363 from './assets/2018-07-29-17-42-52.mp4';
import img_363 from './assets/2018-07-29-17-42-52.mp4.png';
import video_364 from './assets/2018-07-29-17-54-20.mp4';
import img_364 from './assets/2018-07-29-17-54-20.mp4.png';
import video_365 from './assets/2018-08-08-15-27-15.mp4';
import img_365 from './assets/2018-08-08-15-27-15.mp4.png';
import video_366 from './assets/2018-08-08-15-30-48.mp4';
import img_366 from './assets/2018-08-08-15-30-48.mp4.png';
import video_367 from './assets/2018-08-08-15-36-52.mp4';
import img_367 from './assets/2018-08-08-15-36-52.mp4.png';
import video_368 from './assets/2018-08-08-16-38-30.mp4';
import img_368 from './assets/2018-08-08-16-38-30.mp4.png';
import video_369 from './assets/2018-08-25-18-19-11.mp4';
import img_369 from './assets/2018-08-25-18-19-11.mp4.png';
import video_370 from './assets/2018-08-25-18-25-42.mp4';
import img_370 from './assets/2018-08-25-18-25-42.mp4.png';
import video_371 from './assets/2018-08-27-16-17-06.mp4';
import img_371 from './assets/2018-08-27-16-17-06.mp4.png';
import video_372 from './assets/2018-08-27-16-21-16.mp4';
import img_372 from './assets/2018-08-27-16-21-16.mp4.png';
import video_373 from './assets/2018-08-29-17-47-01.mp4';
import img_373 from './assets/2018-08-29-17-47-01.mp4.png';
import video_374 from './assets/2018-08-29-18-02-41.mp4';
import img_374 from './assets/2018-08-29-18-02-41.mp4.png';
import video_375 from './assets/2018-08-30-18-00-18.mp4';
import img_375 from './assets/2018-08-30-18-00-18.mp4.png';
import video_376 from './assets/2018-08-30-18-06-07.mp4';
import img_376 from './assets/2018-08-30-18-06-07.mp4.png';
import video_377 from './assets/2018-09-01-17-54-32.mp4';
import img_377 from './assets/2018-09-01-17-54-32.mp4.png';
import video_378 from './assets/2018-09-08-14-35-05.mp4';
import img_378 from './assets/2018-09-08-14-35-05.mp4.png';
import video_379 from './assets/2018-09-08-17-31-35.mp4';
import img_379 from './assets/2018-09-08-17-31-35.mp4.png';
import video_380 from './assets/2018-09-08-17-42-05.mp4';
import img_380 from './assets/2018-09-08-17-42-05.mp4.png';
import video_381 from './assets/2018-09-11-17-26-43.mp4';
import img_381 from './assets/2018-09-11-17-26-43.mp4.png';
import video_382 from './assets/2018-09-11-17-43-31.mp4';
import img_382 from './assets/2018-09-11-17-43-31.mp4.png';
import video_383 from './assets/2018-09-11-20-38-54.mp4';
import img_383 from './assets/2018-09-11-20-38-54.mp4.png';
import video_384 from './assets/2018-09-13-17-45-44.mp4';
import img_384 from './assets/2018-09-13-17-45-44.mp4.png';
import video_385 from './assets/2018-09-13-17-47-27.mp4';
import img_385 from './assets/2018-09-13-17-47-27.mp4.png';
import video_386 from './assets/2018-09-15-17-55-45.mp4';
import img_386 from './assets/2018-09-15-17-55-45.mp4.png';
import video_387 from './assets/2018-09-15-17-56-55.mp4';
import img_387 from './assets/2018-09-15-17-56-55.mp4.png';
import video_388 from './assets/2018-09-17-17-42-57.mp4';
import img_388 from './assets/2018-09-17-17-42-57.mp4.png';

export default class Year2018Q3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_340,
      image: img_340,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_340 }) }>
                    <img src={ img_340 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_341 }) }>
                    <img src={ img_341 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_342 }) }>
                    <img src={ img_342 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_343 }) }>
                    <img src={ img_343 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_344 }) }>
                    <img src={ img_344 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_345 }) }>
                    <img src={ img_345 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_346 }) }>
                    <img src={ img_346 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_347 }) }>
                    <img src={ img_347 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_348 }) }>
                    <img src={ img_348 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_349 }) }>
                    <img src={ img_349 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_350 }) }>
                    <img src={ img_350 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_351 }) }>
                    <img src={ img_351 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_352 }) }>
                    <img src={ img_352 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_353 }) }>
                    <img src={ img_353 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_354 }) }>
                    <img src={ img_354 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_355 }) }>
                    <img src={ img_355 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_356 }) }>
                    <img src={ img_356 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_357 }) }>
                    <img src={ img_357 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_358 }) }>
                    <img src={ img_358 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_359 }) }>
                    <img src={ img_359 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_360 }) }>
                    <img src={ img_360 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_361 }) }>
                    <img src={ img_361 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_362 }) }>
                    <img src={ img_362 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_363 }) }>
                    <img src={ img_363 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_364 }) }>
                    <img src={ img_364 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_365 }) }>
                    <img src={ img_365 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_366 }) }>
                    <img src={ img_366 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_367 }) }>
                    <img src={ img_367 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_368 }) }>
                    <img src={ img_368 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_369 }) }>
                    <img src={ img_369 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_370 }) }>
                    <img src={ img_370 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_371 }) }>
                    <img src={ img_371 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_372 }) }>
                    <img src={ img_372 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_373 }) }>
                    <img src={ img_373 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_374 }) }>
                    <img src={ img_374 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_375 }) }>
                    <img src={ img_375 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_376 }) }>
                    <img src={ img_376 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_377 }) }>
                    <img src={ img_377 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_378 }) }>
                    <img src={ img_378 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_379 }) }>
                    <img src={ img_379 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_380 }) }>
                    <img src={ img_380 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_381 }) }>
                    <img src={ img_381 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_382 }) }>
                    <img src={ img_382 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_383 }) }>
                    <img src={ img_383 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_384 }) }>
                    <img src={ img_384 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_385 }) }>
                    <img src={ img_385 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_386 }) }>
                    <img src={ img_386 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_387 }) }>
                    <img src={ img_387 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_388 }) }>
                    <img src={ img_388 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
