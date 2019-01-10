import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_291 from './assets/2018-05-10 149.mp4';
import img_291 from './assets/2018-05-10 149.mp4.png';
import video_292 from './assets/2018-05-10 400.mp4';
import img_292 from './assets/2018-05-10 400.mp4.png';
import video_293 from './assets/2018-05-14 101.mp4';
import img_293 from './assets/2018-05-14 101.mp4.png';
import video_294 from './assets/2018-05-14 224.mp4';
import img_294 from './assets/2018-05-14 224.mp4.png';
import video_295 from './assets/2018-05-14 319.mp4';
import img_295 from './assets/2018-05-14 319.mp4.png';
import video_296 from './assets/2018-05-17 357.mp4';
import img_296 from './assets/2018-05-17 357.mp4.png';
import video_297 from './assets/2018-05-17 438.mp4';
import img_297 from './assets/2018-05-17 438.mp4.png';
import video_298 from './assets/2018-05-18 33.mp4';
import img_298 from './assets/2018-05-18 33.mp4.png';
import video_299 from './assets/2018-05-19-17-19-24.mp4';
import img_299 from './assets/2018-05-19-17-19-24.mp4.png';
import video_300 from './assets/2018-05-19-17-20-31.mp4';
import img_300 from './assets/2018-05-19-17-20-31.mp4.png';
import video_301 from './assets/2018-05-22-17-36-29.mp4';
import img_301 from './assets/2018-05-22-17-36-29.mp4.png';
import video_302 from './assets/2018-05-25-17-18-21.mp4';
import img_302 from './assets/2018-05-25-17-18-21.mp4.png';
import video_303 from './assets/2018-05-28-17-22-00.mp4';
import img_303 from './assets/2018-05-28-17-22-00.mp4.png';
import video_304 from './assets/2018-05-28-17-23-06.mp4';
import img_304 from './assets/2018-05-28-17-23-06.mp4.png';
import video_305 from './assets/2018-05-28-17-23-33.mp4';
import img_305 from './assets/2018-05-28-17-23-33.mp4.png';
import video_306 from './assets/2018-06-02-17-19-44.mp4';
import img_306 from './assets/2018-06-02-17-19-44.mp4.png';
import video_307 from './assets/2018-06-02-17-33-36.mp4';
import img_307 from './assets/2018-06-02-17-33-36.mp4.png';
import video_308 from './assets/2018-06-06-18-03-18.mp4';
import img_308 from './assets/2018-06-06-18-03-18.mp4.png';
import video_309 from './assets/2018-06-06-18-22-38.mp4';
import img_309 from './assets/2018-06-06-18-22-38.mp4.png';
import video_310 from './assets/2018-06-08-17-25-16.mp4';
import img_310 from './assets/2018-06-08-17-25-16.mp4.png';
import video_311 from './assets/2018-06-08-17-28-44.mp4';
import img_311 from './assets/2018-06-08-17-28-44.mp4.png';
import video_312 from './assets/2018-06-09-17-37-31.mp4';
import img_312 from './assets/2018-06-09-17-37-31.mp4.png';
import video_313 from './assets/2018-06-09-17-40-33.mp4';
import img_313 from './assets/2018-06-09-17-40-33.mp4.png';
import video_314 from './assets/2018-06-09-17-46-43.mp4';
import img_314 from './assets/2018-06-09-17-46-43.mp4.png';
import video_315 from './assets/2018-06-10-17-24-46.mp4';
import img_315 from './assets/2018-06-10-17-24-46.mp4.png';
import video_316 from './assets/2018-06-10-17-26-47.mp4';
import img_316 from './assets/2018-06-10-17-26-47.mp4.png';
import video_317 from './assets/2018-06-14-17-44-22.mp4';
import img_317 from './assets/2018-06-14-17-44-22.mp4.png';
import video_318 from './assets/2018-06-14-17-50-33.mp4';
import img_318 from './assets/2018-06-14-17-50-33.mp4.png';
import video_319 from './assets/2018-06-15-17-14-07.mp4';
import img_319 from './assets/2018-06-15-17-14-07.mp4.png';
import video_320 from './assets/2018-06-15-17-14-48.mp4';
import img_320 from './assets/2018-06-15-17-14-48.mp4.png';
import video_321 from './assets/2018-06-15-17-15-43.mp4';
import img_321 from './assets/2018-06-15-17-15-43.mp4.png';
import video_322 from './assets/2018-06-16-17-04-29.mp4';
import img_322 from './assets/2018-06-16-17-04-29.mp4.png';
import video_323 from './assets/2018-06-17-18-24-35.mp4';
import img_323 from './assets/2018-06-17-18-24-35.mp4.png';
import video_324 from './assets/2018-06-17-18-25-36.mp4';
import img_324 from './assets/2018-06-17-18-25-36.mp4.png';
import video_325 from './assets/2018-06-17-18-27-09.mp4';
import img_325 from './assets/2018-06-17-18-27-09.mp4.png';
import video_326 from './assets/2018-06-18-16-18-01.mp4';
import img_326 from './assets/2018-06-18-16-18-01.mp4.png';
import video_327 from './assets/2018-06-18-16-19-32.mp4';
import img_327 from './assets/2018-06-18-16-19-32.mp4.png';
import video_328 from './assets/2018-06-18-17-55-32.mp4';
import img_328 from './assets/2018-06-18-17-55-32.mp4.png';
import video_329 from './assets/2018-06-19-16-32-51.mp4';
import img_329 from './assets/2018-06-19-16-32-51.mp4.png';
import video_330 from './assets/2018-06-19-16-46-20.mp4';
import img_330 from './assets/2018-06-19-16-46-20.mp4.png';
import video_331 from './assets/2018-06-22-17-19-03.mp4';
import img_331 from './assets/2018-06-22-17-19-03.mp4.png';
import video_332 from './assets/2018-06-24-17-28-44.mp4';
import img_332 from './assets/2018-06-24-17-28-44.mp4.png';
import video_333 from './assets/2018-06-27-17-32-56.mp4';
import img_333 from './assets/2018-06-27-17-32-56.mp4.png';
import video_334 from './assets/2018-06-27-17-34-48.mp4';
import img_334 from './assets/2018-06-27-17-34-48.mp4.png';
import video_335 from './assets/2018-06-28-17-01-25.mp4';
import img_335 from './assets/2018-06-28-17-01-25.mp4.png';
import video_336 from './assets/2018-06-29-17-54-35.mp4';
import img_336 from './assets/2018-06-29-17-54-35.mp4.png';
import video_337 from './assets/2018-06-30-17-35-46.mp4';
import img_337 from './assets/2018-06-30-17-35-46.mp4.png';
import video_338 from './assets/2018-06-30-17-36-37.mp4';
import img_338 from './assets/2018-06-30-17-36-37.mp4.png';
import video_339 from './assets/2018-07-03-18-17-20.mp4';
import img_339 from './assets/2018-07-03-18-17-20.mp4.png';

export default class Year2018Q2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_291,
      image: img_291,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_291 }) }>
                    <img src={ img_291 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_292 }) }>
                    <img src={ img_292 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_293 }) }>
                    <img src={ img_293 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_294 }) }>
                    <img src={ img_294 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_295 }) }>
                    <img src={ img_295 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_296 }) }>
                    <img src={ img_296 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_297 }) }>
                    <img src={ img_297 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_298 }) }>
                    <img src={ img_298 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_299 }) }>
                    <img src={ img_299 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_300 }) }>
                    <img src={ img_300 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_301 }) }>
                    <img src={ img_301 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_302 }) }>
                    <img src={ img_302 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_303 }) }>
                    <img src={ img_303 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_304 }) }>
                    <img src={ img_304 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_305 }) }>
                    <img src={ img_305 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_306 }) }>
                    <img src={ img_306 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_307 }) }>
                    <img src={ img_307 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_308 }) }>
                    <img src={ img_308 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_309 }) }>
                    <img src={ img_309 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_310 }) }>
                    <img src={ img_310 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_311 }) }>
                    <img src={ img_311 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_312 }) }>
                    <img src={ img_312 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_313 }) }>
                    <img src={ img_313 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_314 }) }>
                    <img src={ img_314 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_315 }) }>
                    <img src={ img_315 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_316 }) }>
                    <img src={ img_316 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_317 }) }>
                    <img src={ img_317 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_318 }) }>
                    <img src={ img_318 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_319 }) }>
                    <img src={ img_319 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_320 }) }>
                    <img src={ img_320 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_321 }) }>
                    <img src={ img_321 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_322 }) }>
                    <img src={ img_322 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_323 }) }>
                    <img src={ img_323 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_324 }) }>
                    <img src={ img_324 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_325 }) }>
                    <img src={ img_325 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_326 }) }>
                    <img src={ img_326 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_327 }) }>
                    <img src={ img_327 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_328 }) }>
                    <img src={ img_328 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_329 }) }>
                    <img src={ img_329 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_330 }) }>
                    <img src={ img_330 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_331 }) }>
                    <img src={ img_331 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_332 }) }>
                    <img src={ img_332 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_333 }) }>
                    <img src={ img_333 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_334 }) }>
                    <img src={ img_334 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_335 }) }>
                    <img src={ img_335 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_336 }) }>
                    <img src={ img_336 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_337 }) }>
                    <img src={ img_337 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_338 }) }>
                    <img src={ img_338 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_339 }) }>
                    <img src={ img_339 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
