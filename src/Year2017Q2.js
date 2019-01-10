import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_88 from './assets/2017-08-01 119.mp4';
import img_88 from './assets/2017-08-01 119.mp4.png';
import video_89 from './assets/2017-08-01 161.mp4';
import img_89 from './assets/2017-08-01 161.mp4.png';
import video_90 from './assets/2017-08-03 355.mp4';
import img_90 from './assets/2017-08-03 355.mp4.png';
import video_91 from './assets/2017-08-05 494.mp4';
import img_91 from './assets/2017-08-05 494.mp4.png';
import video_92 from './assets/2017-08-06 163.mp4';
import img_92 from './assets/2017-08-06 163.mp4.png';
import video_93 from './assets/2017-08-06 330.mp4';
import img_93 from './assets/2017-08-06 330.mp4.png';
import video_94 from './assets/2017-08-06 416.mp4';
import img_94 from './assets/2017-08-06 416.mp4.png';
import video_95 from './assets/2017-08-06 82.mp4';
import img_95 from './assets/2017-08-06 82.mp4.png';
import video_96 from './assets/2017-08-07 395.mp4';
import img_96 from './assets/2017-08-07 395.mp4.png';
import video_97 from './assets/2017-08-07 95.mp4';
import img_97 from './assets/2017-08-07 95.mp4.png';
import video_98 from './assets/2017-08-09 105.mp4';
import img_98 from './assets/2017-08-09 105.mp4.png';
import video_99 from './assets/2017-08-12 206.mp4';
import img_99 from './assets/2017-08-12 206.mp4.png';
import video_100 from './assets/2017-08-12 327.mp4';
import img_100 from './assets/2017-08-12 327.mp4.png';
import video_101 from './assets/2017-08-13 472.mp4';
import img_101 from './assets/2017-08-13 472.mp4.png';
import video_102 from './assets/2017-08-13 91.mp4';
import img_102 from './assets/2017-08-13 91.mp4.png';
import video_103 from './assets/2017-08-14 198.mp4';
import img_103 from './assets/2017-08-14 198.mp4.png';
import video_104 from './assets/2017-08-14 262.mp4';
import img_104 from './assets/2017-08-14 262.mp4.png';
import video_105 from './assets/2017-08-15 115.mp4';
import img_105 from './assets/2017-08-15 115.mp4.png';
import video_106 from './assets/2017-08-15 338.mp4';
import img_106 from './assets/2017-08-15 338.mp4.png';
import video_107 from './assets/2017-08-17 14.mp4';
import img_107 from './assets/2017-08-17 14.mp4.png';
import video_108 from './assets/2017-08-19 435.mp4';
import img_108 from './assets/2017-08-19 435.mp4.png';
import video_109 from './assets/2017-08-19 450.mp4';
import img_109 from './assets/2017-08-19 450.mp4.png';
import video_110 from './assets/2017-08-20 228.mp4';
import img_110 from './assets/2017-08-20 228.mp4.png';
import video_111 from './assets/2017-08-21 493.mp4';
import img_111 from './assets/2017-08-21 493.mp4.png';
import video_112 from './assets/2017-08-22 181.mp4';
import img_112 from './assets/2017-08-22 181.mp4.png';
import video_113 from './assets/2017-08-23 245.mp4';
import img_113 from './assets/2017-08-23 245.mp4.png';
import video_114 from './assets/2017-08-23 353.mp4';
import img_114 from './assets/2017-08-23 353.mp4.png';
import video_115 from './assets/2017-08-23 70.mp4';
import img_115 from './assets/2017-08-23 70.mp4.png';
import video_116 from './assets/2017-08-24 174.mp4';
import img_116 from './assets/2017-08-24 174.mp4.png';
import video_117 from './assets/2017-08-24 237.mp4';
import img_117 from './assets/2017-08-24 237.mp4.png';
import video_118 from './assets/2017-08-24 338.mp4';
import img_118 from './assets/2017-08-24 338.mp4.png';
import video_119 from './assets/2017-08-25 440.mp4';
import img_119 from './assets/2017-08-25 440.mp4.png';
import video_120 from './assets/2017-08-25 490.mp4';
import img_120 from './assets/2017-08-25 490.mp4.png';
import video_121 from './assets/2017-08-26 245.mp4';
import img_121 from './assets/2017-08-26 245.mp4.png';
import video_122 from './assets/2017-08-27 200.mp4';
import img_122 from './assets/2017-08-27 200.mp4.png';
import video_123 from './assets/2017-08-27 41.mp4';
import img_123 from './assets/2017-08-27 41.mp4.png';
import video_124 from './assets/2017-08-30 203.mp4';
import img_124 from './assets/2017-08-30 203.mp4.png';
import video_125 from './assets/2017-09-01 312.mp4';
import img_125 from './assets/2017-09-01 312.mp4.png';
import video_126 from './assets/2017-09-01 484.mp4';
import img_126 from './assets/2017-09-01 484.mp4.png';
import video_127 from './assets/2017-09-01 499.mp4';
import img_127 from './assets/2017-09-01 499.mp4.png';
import video_128 from './assets/2017-09-02 249.mp4';
import img_128 from './assets/2017-09-02 249.mp4.png';
import video_129 from './assets/2017-09-02 452.mp4';
import img_129 from './assets/2017-09-02 452.mp4.png';
import video_130 from './assets/2017-09-03 55.mp4';
import img_130 from './assets/2017-09-03 55.mp4.png';
import video_131 from './assets/2017-09-05 224.mp4';
import img_131 from './assets/2017-09-05 224.mp4.png';
import video_132 from './assets/2017-09-06 385.mp4';
import img_132 from './assets/2017-09-06 385.mp4.png';
import video_133 from './assets/2017-09-09 135.mp4';
import img_133 from './assets/2017-09-09 135.mp4.png';
import video_134 from './assets/2017-09-10 208.mp4';
import img_134 from './assets/2017-09-10 208.mp4.png';
import video_135 from './assets/2017-09-10 437.mp4';
import img_135 from './assets/2017-09-10 437.mp4.png';
import video_136 from './assets/2017-09-11 20.mp4';
import img_136 from './assets/2017-09-11 20.mp4.png';
import video_137 from './assets/2017-09-12 283.mp4';
import img_137 from './assets/2017-09-12 283.mp4.png';
import video_138 from './assets/2017-09-13 5.mp4';
import img_138 from './assets/2017-09-13 5.mp4.png';
import video_139 from './assets/2017-09-15 399.mp4';
import img_139 from './assets/2017-09-15 399.mp4.png';

export default class Year2017Q2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_88,
      image: img_88,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_88 }) }>
                    <img src={ img_88 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_89 }) }>
                    <img src={ img_89 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_90 }) }>
                    <img src={ img_90 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_91 }) }>
                    <img src={ img_91 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_92 }) }>
                    <img src={ img_92 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_93 }) }>
                    <img src={ img_93 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_94 }) }>
                    <img src={ img_94 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_95 }) }>
                    <img src={ img_95 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_96 }) }>
                    <img src={ img_96 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_97 }) }>
                    <img src={ img_97 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_98 }) }>
                    <img src={ img_98 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_99 }) }>
                    <img src={ img_99 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_100 }) }>
                    <img src={ img_100 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_101 }) }>
                    <img src={ img_101 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_102 }) }>
                    <img src={ img_102 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_103 }) }>
                    <img src={ img_103 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_104 }) }>
                    <img src={ img_104 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_105 }) }>
                    <img src={ img_105 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_106 }) }>
                    <img src={ img_106 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_107 }) }>
                    <img src={ img_107 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_108 }) }>
                    <img src={ img_108 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_109 }) }>
                    <img src={ img_109 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_110 }) }>
                    <img src={ img_110 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_111 }) }>
                    <img src={ img_111 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_112 }) }>
                    <img src={ img_112 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_113 }) }>
                    <img src={ img_113 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_114 }) }>
                    <img src={ img_114 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_115 }) }>
                    <img src={ img_115 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_116 }) }>
                    <img src={ img_116 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_117 }) }>
                    <img src={ img_117 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_118 }) }>
                    <img src={ img_118 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_119 }) }>
                    <img src={ img_119 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_120 }) }>
                    <img src={ img_120 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_121 }) }>
                    <img src={ img_121 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_122 }) }>
                    <img src={ img_122 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_123 }) }>
                    <img src={ img_123 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_124 }) }>
                    <img src={ img_124 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_125 }) }>
                    <img src={ img_125 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_126 }) }>
                    <img src={ img_126 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_127 }) }>
                    <img src={ img_127 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_128 }) }>
                    <img src={ img_128 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_129 }) }>
                    <img src={ img_129 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_130 }) }>
                    <img src={ img_130 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_131 }) }>
                    <img src={ img_131 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_132 }) }>
                    <img src={ img_132 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_133 }) }>
                    <img src={ img_133 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_134 }) }>
                    <img src={ img_134 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_135 }) }>
                    <img src={ img_135 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_136 }) }>
                    <img src={ img_136 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_137 }) }>
                    <img src={ img_137 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_138 }) }>
                    <img src={ img_138 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_139 }) }>
                    <img src={ img_139 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
