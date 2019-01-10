import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_191 from './assets/2017-11-09 483.mp4';
import img_191 from './assets/2017-11-09 483.mp4.png';
import video_192 from './assets/2017-11-11 226.mp4';
import img_192 from './assets/2017-11-11 226.mp4.png';
import video_193 from './assets/2017-11-11 33.mp4';
import img_193 from './assets/2017-11-11 33.mp4.png';
import video_194 from './assets/2017-11-13 126.mp4';
import img_194 from './assets/2017-11-13 126.mp4.png';
import video_195 from './assets/2017-11-13 243.mp4';
import img_195 from './assets/2017-11-13 243.mp4.png';
import video_196 from './assets/2017-11-14 139.mp4';
import img_196 from './assets/2017-11-14 139.mp4.png';
import video_197 from './assets/2017-11-14 152.mp4';
import img_197 from './assets/2017-11-14 152.mp4.png';
import video_198 from './assets/2017-11-14 183.mp4';
import img_198 from './assets/2017-11-14 183.mp4.png';
import video_199 from './assets/2017-11-14 271.mp4';
import img_199 from './assets/2017-11-14 271.mp4.png';
import video_200 from './assets/2017-11-14 35.mp4';
import img_200 from './assets/2017-11-14 35.mp4.png';
import video_201 from './assets/2017-11-14 417.mp4';
import img_201 from './assets/2017-11-14 417.mp4.png';
import video_202 from './assets/2017-11-17 153.mp4';
import img_202 from './assets/2017-11-17 153.mp4.png';
import video_203 from './assets/2017-11-17 199.mp4';
import img_203 from './assets/2017-11-17 199.mp4.png';
import video_204 from './assets/2017-11-17 82.mp4';
import img_204 from './assets/2017-11-17 82.mp4.png';
import video_205 from './assets/2017-11-17 88.mp4';
import img_205 from './assets/2017-11-17 88.mp4.png';
import video_206 from './assets/2017-11-19 172.mp4';
import img_206 from './assets/2017-11-19 172.mp4.png';
import video_207 from './assets/2017-11-19 289.mp4';
import img_207 from './assets/2017-11-19 289.mp4.png';
import video_208 from './assets/2017-11-21 175.mp4';
import img_208 from './assets/2017-11-21 175.mp4.png';
import video_209 from './assets/2017-11-21 186.mp4';
import img_209 from './assets/2017-11-21 186.mp4.png';
import video_210 from './assets/2017-11-21 187.mp4';
import img_210 from './assets/2017-11-21 187.mp4.png';
import video_211 from './assets/2017-11-21 493.mp4';
import img_211 from './assets/2017-11-21 493.mp4.png';
import video_212 from './assets/2017-11-23 121.mp4';
import img_212 from './assets/2017-11-23 121.mp4.png';
import video_213 from './assets/2017-11-23 438.mp4';
import img_213 from './assets/2017-11-23 438.mp4.png';
import video_214 from './assets/2017-11-25 158.mp4';
import img_214 from './assets/2017-11-25 158.mp4.png';
import video_215 from './assets/2017-11-25 232.mp4';
import img_215 from './assets/2017-11-25 232.mp4.png';
import video_216 from './assets/2017-11-25 461.mp4';
import img_216 from './assets/2017-11-25 461.mp4.png';
import video_217 from './assets/2017-11-30 438.mp4';
import img_217 from './assets/2017-11-30 438.mp4.png';
import video_218 from './assets/2017-12-02 324.mp4';
import img_218 from './assets/2017-12-02 324.mp4.png';
import video_219 from './assets/2017-12-02 372.mp4';
import img_219 from './assets/2017-12-02 372.mp4.png';
import video_220 from './assets/2017-12-07 147.mp4';
import img_220 from './assets/2017-12-07 147.mp4.png';
import video_221 from './assets/2017-12-07 359.mp4';
import img_221 from './assets/2017-12-07 359.mp4.png';
import video_222 from './assets/2017-12-11 326.mp4';
import img_222 from './assets/2017-12-11 326.mp4.png';
import video_223 from './assets/2017-12-13 408.mp4';
import img_223 from './assets/2017-12-13 408.mp4.png';
import video_224 from './assets/2017-12-14 120.mp4';
import img_224 from './assets/2017-12-14 120.mp4.png';
import video_225 from './assets/2017-12-14 225.mp4';
import img_225 from './assets/2017-12-14 225.mp4.png';
import video_226 from './assets/2017-12-14 445.mp4';
import img_226 from './assets/2017-12-14 445.mp4.png';
import video_227 from './assets/2017-12-17 240.mp4';
import img_227 from './assets/2017-12-17 240.mp4.png';
import video_228 from './assets/2017-12-20 201.mp4';
import img_228 from './assets/2017-12-20 201.mp4.png';
import video_229 from './assets/2017-12-20 217.mp4';
import img_229 from './assets/2017-12-20 217.mp4.png';
import video_230 from './assets/2017-12-21 149.mp4';
import img_230 from './assets/2017-12-21 149.mp4.png';
import video_231 from './assets/2017-12-21 181.mp4';
import img_231 from './assets/2017-12-21 181.mp4.png';
import video_232 from './assets/2017-12-21 283.mp4';
import img_232 from './assets/2017-12-21 283.mp4.png';
import video_233 from './assets/2017-12-21 300.mp4';
import img_233 from './assets/2017-12-21 300.mp4.png';
import video_234 from './assets/2017-12-21 346.mp4';
import img_234 from './assets/2017-12-21 346.mp4.png';
import video_235 from './assets/2017-12-23 233.mp4';
import img_235 from './assets/2017-12-23 233.mp4.png';
import video_236 from './assets/2017-12-23 324.mp4';
import img_236 from './assets/2017-12-23 324.mp4.png';
import video_237 from './assets/2017-12-23 447.mp4';
import img_237 from './assets/2017-12-23 447.mp4.png';
import video_238 from './assets/2017-12-24 188.mp4';
import img_238 from './assets/2017-12-24 188.mp4.png';
import video_239 from './assets/2017-12-26 105.mp4';
import img_239 from './assets/2017-12-26 105.mp4.png';
import video_240 from './assets/2017-12-26 285.mp4';
import img_240 from './assets/2017-12-26 285.mp4.png';
import video_241 from './assets/2017-12-26 353.mp4';
import img_241 from './assets/2017-12-26 353.mp4.png';

export default class Year2017H2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_191,
      image: img_191,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_191 }) }>
                    <img src={ img_191 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_192 }) }>
                    <img src={ img_192 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_193 }) }>
                    <img src={ img_193 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_194 }) }>
                    <img src={ img_194 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_195 }) }>
                    <img src={ img_195 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_196 }) }>
                    <img src={ img_196 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_197 }) }>
                    <img src={ img_197 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_198 }) }>
                    <img src={ img_198 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_199 }) }>
                    <img src={ img_199 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_200 }) }>
                    <img src={ img_200 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_201 }) }>
                    <img src={ img_201 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_202 }) }>
                    <img src={ img_202 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_203 }) }>
                    <img src={ img_203 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_204 }) }>
                    <img src={ img_204 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_205 }) }>
                    <img src={ img_205 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_206 }) }>
                    <img src={ img_206 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_207 }) }>
                    <img src={ img_207 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_208 }) }>
                    <img src={ img_208 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_209 }) }>
                    <img src={ img_209 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_210 }) }>
                    <img src={ img_210 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_211 }) }>
                    <img src={ img_211 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_212 }) }>
                    <img src={ img_212 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_213 }) }>
                    <img src={ img_213 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_214 }) }>
                    <img src={ img_214 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_215 }) }>
                    <img src={ img_215 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_216 }) }>
                    <img src={ img_216 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_217 }) }>
                    <img src={ img_217 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_218 }) }>
                    <img src={ img_218 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_219 }) }>
                    <img src={ img_219 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_220 }) }>
                    <img src={ img_220 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_221 }) }>
                    <img src={ img_221 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_222 }) }>
                    <img src={ img_222 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_223 }) }>
                    <img src={ img_223 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_224 }) }>
                    <img src={ img_224 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_225 }) }>
                    <img src={ img_225 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_226 }) }>
                    <img src={ img_226 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_227 }) }>
                    <img src={ img_227 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_228 }) }>
                    <img src={ img_228 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_229 }) }>
                    <img src={ img_229 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_230 }) }>
                    <img src={ img_230 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_231 }) }>
                    <img src={ img_231 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_232 }) }>
                    <img src={ img_232 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_233 }) }>
                    <img src={ img_233 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_234 }) }>
                    <img src={ img_234 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_235 }) }>
                    <img src={ img_235 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_236 }) }>
                    <img src={ img_236 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_237 }) }>
                    <img src={ img_237 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_238 }) }>
                    <img src={ img_238 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_239 }) }>
                    <img src={ img_239 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_240 }) }>
                    <img src={ img_240 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_241 }) }>
                    <img src={ img_241 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
