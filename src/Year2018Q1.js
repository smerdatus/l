import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_242 from './assets/2018-01-03 396.mp4';
import img_242 from './assets/2018-01-03 396.mp4.png';
import video_243 from './assets/2018-01-11 131.mp4';
import img_243 from './assets/2018-01-11 131.mp4.png';
import video_244 from './assets/2018-01-11 257.mp4';
import img_244 from './assets/2018-01-11 257.mp4.png';
import video_245 from './assets/2018-01-11 464.mp4';
import img_245 from './assets/2018-01-11 464.mp4.png';
import video_246 from './assets/2018-01-15 183.mp4';
import img_246 from './assets/2018-01-15 183.mp4.png';
import video_247 from './assets/2018-01-15 434.mp4';
import img_247 from './assets/2018-01-15 434.mp4.png';
import video_248 from './assets/2018-01-15 54.mp4';
import img_248 from './assets/2018-01-15 54.mp4.png';
import video_249 from './assets/2018-01-15 82.mp4';
import img_249 from './assets/2018-01-15 82.mp4.png';
import video_250 from './assets/2018-01-18 39.mp4';
import img_250 from './assets/2018-01-18 39.mp4.png';
import video_251 from './assets/2018-01-21 475.mp4';
import img_251 from './assets/2018-01-21 475.mp4.png';
import video_252 from './assets/2018-01-22 295.mp4';
import img_252 from './assets/2018-01-22 295.mp4.png';
import video_253 from './assets/2018-01-25 229.mp4';
import img_253 from './assets/2018-01-25 229.mp4.png';
import video_254 from './assets/2018-02-05 153.mp4';
import img_254 from './assets/2018-02-05 153.mp4.png';
import video_255 from './assets/2018-02-05 428.mp4';
import img_255 from './assets/2018-02-05 428.mp4.png';
import video_256 from './assets/2018-02-05 455.mp4';
import img_256 from './assets/2018-02-05 455.mp4.png';
import video_257 from './assets/2018-02-19 190.mp4';
import img_257 from './assets/2018-02-19 190.mp4.png';
import video_258 from './assets/2018-02-19 480.mp4';
import img_258 from './assets/2018-02-19 480.mp4.png';
import video_259 from './assets/2018-03-04 68.mp4';
import img_259 from './assets/2018-03-04 68.mp4.png';
import video_260 from './assets/2018-03-11 211.mp4';
import img_260 from './assets/2018-03-11 211.mp4.png';
import video_261 from './assets/2018-03-11 321.mp4';
import img_261 from './assets/2018-03-11 321.mp4.png';
import video_262 from './assets/2018-03-17 370.mp4';
import img_262 from './assets/2018-03-17 370.mp4.png';
import video_263 from './assets/2018-03-17 62.mp4';
import img_263 from './assets/2018-03-17 62.mp4.png';
import video_264 from './assets/2018-03-17 89.mp4';
import img_264 from './assets/2018-03-17 89.mp4.png';
import video_265 from './assets/2018-03-29 131.mp4';
import img_265 from './assets/2018-03-29 131.mp4.png';
import video_266 from './assets/2018-03-29 88.mp4';
import img_266 from './assets/2018-03-29 88.mp4.png';
import video_267 from './assets/2018-04-28 22.mp4';
import img_267 from './assets/2018-04-28 22.mp4.png';
import video_268 from './assets/2018-04-28 377.mp4';
import img_268 from './assets/2018-04-28 377.mp4.png';
import video_269 from './assets/2018-04-28 382.mp4';
import img_269 from './assets/2018-04-28 382.mp4.png';
import video_270 from './assets/2018-04-29 478.mp4';
import img_270 from './assets/2018-04-29 478.mp4.png';
import video_271 from './assets/2018-04-29 49.mp4';
import img_271 from './assets/2018-04-29 49.mp4.png';
import video_272 from './assets/2018-04-29 59.mp4';
import img_272 from './assets/2018-04-29 59.mp4.png';
import video_273 from './assets/2018-04-30 172.mp4';
import img_273 from './assets/2018-04-30 172.mp4.png';
import video_274 from './assets/2018-04-30 468.mp4';
import img_274 from './assets/2018-04-30 468.mp4.png';
import video_275 from './assets/2018-04-30 59.mp4';
import img_275 from './assets/2018-04-30 59.mp4.png';
import video_276 from './assets/2018-04-30 71.mp4';
import img_276 from './assets/2018-04-30 71.mp4.png';
import video_277 from './assets/2018-05-01 145.mp4';
import img_277 from './assets/2018-05-01 145.mp4.png';
import video_278 from './assets/2018-05-01 333.mp4';
import img_278 from './assets/2018-05-01 333.mp4.png';
import video_279 from './assets/2018-05-01 81.mp4';
import img_279 from './assets/2018-05-01 81.mp4.png';
import video_280 from './assets/2018-05-04 109.mp4';
import img_280 from './assets/2018-05-04 109.mp4.png';
import video_281 from './assets/2018-05-04 220.mp4';
import img_281 from './assets/2018-05-04 220.mp4.png';
import video_282 from './assets/2018-05-05 198.mp4';
import img_282 from './assets/2018-05-05 198.mp4.png';
import video_283 from './assets/2018-05-05 37.mp4';
import img_283 from './assets/2018-05-05 37.mp4.png';
import video_284 from './assets/2018-05-05 47.mp4';
import img_284 from './assets/2018-05-05 47.mp4.png';
import video_285 from './assets/2018-05-07 18.mp4';
import img_285 from './assets/2018-05-07 18.mp4.png';
import video_286 from './assets/2018-05-07 21.mp4';
import img_286 from './assets/2018-05-07 21.mp4.png';
import video_287 from './assets/2018-05-09 177.mp4';
import img_287 from './assets/2018-05-09 177.mp4.png';
import video_288 from './assets/2018-05-09 30.mp4';
import img_288 from './assets/2018-05-09 30.mp4.png';
import video_289 from './assets/2018-05-09 386.mp4';
import img_289 from './assets/2018-05-09 386.mp4.png';
import video_290 from './assets/2018-05-10 142.mp4';
import img_290 from './assets/2018-05-10 142.mp4.png';

export default class Year2018Q1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_242,
      image: img_242,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_242 }) }>
                    <img src={ img_242 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_243 }) }>
                    <img src={ img_243 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_244 }) }>
                    <img src={ img_244 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_245 }) }>
                    <img src={ img_245 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_246 }) }>
                    <img src={ img_246 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_247 }) }>
                    <img src={ img_247 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_248 }) }>
                    <img src={ img_248 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_249 }) }>
                    <img src={ img_249 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_250 }) }>
                    <img src={ img_250 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_251 }) }>
                    <img src={ img_251 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_252 }) }>
                    <img src={ img_252 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_253 }) }>
                    <img src={ img_253 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_254 }) }>
                    <img src={ img_254 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_255 }) }>
                    <img src={ img_255 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_256 }) }>
                    <img src={ img_256 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_257 }) }>
                    <img src={ img_257 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_258 }) }>
                    <img src={ img_258 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_259 }) }>
                    <img src={ img_259 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_260 }) }>
                    <img src={ img_260 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_261 }) }>
                    <img src={ img_261 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_262 }) }>
                    <img src={ img_262 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_263 }) }>
                    <img src={ img_263 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_264 }) }>
                    <img src={ img_264 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_265 }) }>
                    <img src={ img_265 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_266 }) }>
                    <img src={ img_266 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_267 }) }>
                    <img src={ img_267 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_268 }) }>
                    <img src={ img_268 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_269 }) }>
                    <img src={ img_269 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_270 }) }>
                    <img src={ img_270 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_271 }) }>
                    <img src={ img_271 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_272 }) }>
                    <img src={ img_272 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_273 }) }>
                    <img src={ img_273 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_274 }) }>
                    <img src={ img_274 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_275 }) }>
                    <img src={ img_275 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_276 }) }>
                    <img src={ img_276 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_277 }) }>
                    <img src={ img_277 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_278 }) }>
                    <img src={ img_278 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_279 }) }>
                    <img src={ img_279 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_280 }) }>
                    <img src={ img_280 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_281 }) }>
                    <img src={ img_281 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_282 }) }>
                    <img src={ img_282 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_283 }) }>
                    <img src={ img_283 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_284 }) }>
                    <img src={ img_284 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_285 }) }>
                    <img src={ img_285 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_286 }) }>
                    <img src={ img_286 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_287 }) }>
                    <img src={ img_287 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_288 }) }>
                    <img src={ img_288 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_289 }) }>
                    <img src={ img_289 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_290 }) }>
                    <img src={ img_290 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
