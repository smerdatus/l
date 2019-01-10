import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_140 from './assets/2017-09-16 224.mp4';
import img_140 from './assets/2017-09-16 224.mp4.png';
import video_141 from './assets/2017-09-17 410.mp4';
import img_141 from './assets/2017-09-17 410.mp4.png';
import video_142 from './assets/2017-09-18 165.mp4';
import img_142 from './assets/2017-09-18 165.mp4.png';
import video_143 from './assets/2017-09-20 317.mp4';
import img_143 from './assets/2017-09-20 317.mp4.png';
import video_144 from './assets/2017-09-23 313.mp4';
import img_144 from './assets/2017-09-23 313.mp4.png';
import video_145 from './assets/2017-09-24 148.mp4';
import img_145 from './assets/2017-09-24 148.mp4.png';
import video_146 from './assets/2017-09-28 199.mp4';
import img_146 from './assets/2017-09-28 199.mp4.png';
import video_147 from './assets/2017-09-30 331.mp4';
import img_147 from './assets/2017-09-30 331.mp4.png';
import video_148 from './assets/2017-10-01 303.mp4';
import img_148 from './assets/2017-10-01 303.mp4.png';
import video_149 from './assets/2017-10-01 373.mp4';
import img_149 from './assets/2017-10-01 373.mp4.png';
import video_150 from './assets/2017-10-02 446.mp4';
import img_150 from './assets/2017-10-02 446.mp4.png';
import video_151 from './assets/2017-10-04 38.mp4';
import img_151 from './assets/2017-10-04 38.mp4.png';
import video_152 from './assets/2017-10-05 283.mp4';
import img_152 from './assets/2017-10-05 283.mp4.png';
import video_153 from './assets/2017-10-07 184.mp4';
import img_153 from './assets/2017-10-07 184.mp4.png';
import video_154 from './assets/2017-10-07 400.mp4';
import img_154 from './assets/2017-10-07 400.mp4.png';
import video_155 from './assets/2017-10-10 334.mp4';
import img_155 from './assets/2017-10-10 334.mp4.png';
import video_156 from './assets/2017-10-10 398.mp4';
import img_156 from './assets/2017-10-10 398.mp4.png';
import video_157 from './assets/2017-10-11 369.mp4';
import img_157 from './assets/2017-10-11 369.mp4.png';
import video_158 from './assets/2017-10-12 307.mp4';
import img_158 from './assets/2017-10-12 307.mp4.png';
import video_159 from './assets/2017-10-12 337.mp4';
import img_159 from './assets/2017-10-12 337.mp4.png';
import video_160 from './assets/2017-10-17 17.mp4';
import img_160 from './assets/2017-10-17 17.mp4.png';
import video_161 from './assets/2017-10-18 230.mp4';
import img_161 from './assets/2017-10-18 230.mp4.png';
import video_162 from './assets/2017-10-18 421.mp4';
import img_162 from './assets/2017-10-18 421.mp4.png';
import video_163 from './assets/2017-10-19 58.mp4';
import img_163 from './assets/2017-10-19 58.mp4.png';
import video_164 from './assets/2017-10-20 214.mp4';
import img_164 from './assets/2017-10-20 214.mp4.png';
import video_165 from './assets/2017-10-20 283.mp4';
import img_165 from './assets/2017-10-20 283.mp4.png';
import video_166 from './assets/2017-10-20 76.mp4';
import img_166 from './assets/2017-10-20 76.mp4.png';
import video_167 from './assets/2017-10-22 494.mp4';
import img_167 from './assets/2017-10-22 494.mp4.png';
import video_168 from './assets/2017-10-23 185.mp4';
import img_168 from './assets/2017-10-23 185.mp4.png';
import video_169 from './assets/2017-10-25 25.mp4';
import img_169 from './assets/2017-10-25 25.mp4.png';
import video_170 from './assets/2017-10-25 75.mp4';
import img_170 from './assets/2017-10-25 75.mp4.png';
import video_171 from './assets/2017-10-27 255.mp4';
import img_171 from './assets/2017-10-27 255.mp4.png';
import video_172 from './assets/2017-10-27 371.mp4';
import img_172 from './assets/2017-10-27 371.mp4.png';
import video_173 from './assets/2017-10-27 4.mp4';
import img_173 from './assets/2017-10-27 4.mp4.png';
import video_174 from './assets/2017-10-30 107.mp4';
import img_174 from './assets/2017-10-30 107.mp4.png';
import video_175 from './assets/2017-10-30 226.mp4';
import img_175 from './assets/2017-10-30 226.mp4.png';
import video_176 from './assets/2017-11-01 163.mp4';
import img_176 from './assets/2017-11-01 163.mp4.png';
import video_177 from './assets/2017-11-01 165.mp4';
import img_177 from './assets/2017-11-01 165.mp4.png';
import video_178 from './assets/2017-11-01 174.mp4';
import img_178 from './assets/2017-11-01 174.mp4.png';
import video_179 from './assets/2017-11-01 240.mp4';
import img_179 from './assets/2017-11-01 240.mp4.png';
import video_180 from './assets/2017-11-02 19.mp4';
import img_180 from './assets/2017-11-02 19.mp4.png';
import video_181 from './assets/2017-11-02 240.mp4';
import img_181 from './assets/2017-11-02 240.mp4.png';
import video_182 from './assets/2017-11-02 293.mp4';
import img_182 from './assets/2017-11-02 293.mp4.png';
import video_183 from './assets/2017-11-02 8.mp4';
import img_183 from './assets/2017-11-02 8.mp4.png';
import video_184 from './assets/2017-11-04 231.mp4';
import img_184 from './assets/2017-11-04 231.mp4.png';
import video_185 from './assets/2017-11-04 367.mp4';
import img_185 from './assets/2017-11-04 367.mp4.png';
import video_186 from './assets/2017-11-04 370.mp4';
import img_186 from './assets/2017-11-04 370.mp4.png';
import video_187 from './assets/2017-11-04 84.mp4';
import img_187 from './assets/2017-11-04 84.mp4.png';
import video_188 from './assets/2017-11-08 241.mp4';
import img_188 from './assets/2017-11-08 241.mp4.png';
import video_189 from './assets/2017-11-08 285.mp4';
import img_189 from './assets/2017-11-08 285.mp4.png';
import video_190 from './assets/2017-11-09 32.mp4';
import img_190 from './assets/2017-11-09 32.mp4.png';

export default class Year2017H2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_140,
      image: img_140,
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
                
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_140 }) }>
                    <img src={ img_140 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_141 }) }>
                    <img src={ img_141 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_142 }) }>
                    <img src={ img_142 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_143 }) }>
                    <img src={ img_143 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_144 }) }>
                    <img src={ img_144 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_145 }) }>
                    <img src={ img_145 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_146 }) }>
                    <img src={ img_146 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_147 }) }>
                    <img src={ img_147 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_148 }) }>
                    <img src={ img_148 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_149 }) }>
                    <img src={ img_149 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_150 }) }>
                    <img src={ img_150 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_151 }) }>
                    <img src={ img_151 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_152 }) }>
                    <img src={ img_152 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_153 }) }>
                    <img src={ img_153 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_154 }) }>
                    <img src={ img_154 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_155 }) }>
                    <img src={ img_155 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_156 }) }>
                    <img src={ img_156 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_157 }) }>
                    <img src={ img_157 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_158 }) }>
                    <img src={ img_158 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_159 }) }>
                    <img src={ img_159 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_160 }) }>
                    <img src={ img_160 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_161 }) }>
                    <img src={ img_161 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_162 }) }>
                    <img src={ img_162 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_163 }) }>
                    <img src={ img_163 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_164 }) }>
                    <img src={ img_164 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_165 }) }>
                    <img src={ img_165 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_166 }) }>
                    <img src={ img_166 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_167 }) }>
                    <img src={ img_167 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_168 }) }>
                    <img src={ img_168 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_169 }) }>
                    <img src={ img_169 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_170 }) }>
                    <img src={ img_170 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_171 }) }>
                    <img src={ img_171 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_172 }) }>
                    <img src={ img_172 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_173 }) }>
                    <img src={ img_173 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_174 }) }>
                    <img src={ img_174 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_175 }) }>
                    <img src={ img_175 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_176 }) }>
                    <img src={ img_176 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_177 }) }>
                    <img src={ img_177 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_178 }) }>
                    <img src={ img_178 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_179 }) }>
                    <img src={ img_179 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_180 }) }>
                    <img src={ img_180 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_181 }) }>
                    <img src={ img_181 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_182 }) }>
                    <img src={ img_182 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_183 }) }>
                    <img src={ img_183 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_184 }) }>
                    <img src={ img_184 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_185 }) }>
                    <img src={ img_185 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_186 }) }>
                    <img src={ img_186 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_187 }) }>
                    <img src={ img_187 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_188 }) }>
                    <img src={ img_188 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_189 }) }>
                    <img src={ img_189 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_190 }) }>
                    <img src={ img_190 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
