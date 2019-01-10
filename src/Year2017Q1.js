import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_27 from './assets/2017-01-25 500.mp4';
import img_27 from './assets/2017-01-25 500.mp4.png';
import video_28 from './assets/2017-01-27 280.mp4';
import img_28 from './assets/2017-01-27 280.mp4.png';
import video_29 from './assets/2017-02-03 55.mp4';
import img_29 from './assets/2017-02-03 55.mp4.png';
import video_30 from './assets/2017-02-12 341.mp4';
import img_30 from './assets/2017-02-12 341.mp4.png';
import video_31 from './assets/2017-02-13 239.mp4';
import img_31 from './assets/2017-02-13 239.mp4.png';
import video_32 from './assets/2017-02-13 329.mp4';
import img_32 from './assets/2017-02-13 329.mp4.png';
import video_33 from './assets/2017-02-16 28.mp4';
import img_33 from './assets/2017-02-16 28.mp4.png';
import video_34 from './assets/2017-02-16 326.mp4';
import img_34 from './assets/2017-02-16 326.mp4.png';
import video_35 from './assets/2017-02-18 233.mp4';
import img_35 from './assets/2017-02-18 233.mp4.png';
import video_36 from './assets/2017-02-26 30.mp4';
import img_36 from './assets/2017-02-26 30.mp4.png';
import video_37 from './assets/2017-02-26 378.mp4';
import img_37 from './assets/2017-02-26 378.mp4.png';
import video_38 from './assets/2017-02-27 474.mp4';
import img_38 from './assets/2017-02-27 474.mp4.png';
import video_39 from './assets/2017-02-28 106.mp4';
import img_39 from './assets/2017-02-28 106.mp4.png';
import video_40 from './assets/2017-03-03 200.mp4';
import img_40 from './assets/2017-03-03 200.mp4.png';
import video_41 from './assets/2017-03-03 331.mp4';
import img_41 from './assets/2017-03-03 331.mp4.png';
import video_42 from './assets/2017-03-06 37.mp4';
import img_42 from './assets/2017-03-06 37.mp4.png';
import video_43 from './assets/2017-03-11 239.mp4';
import img_43 from './assets/2017-03-11 239.mp4.png';
import video_44 from './assets/2017-03-13 239.mp4';
import img_44 from './assets/2017-03-13 239.mp4.png';
import video_45 from './assets/2017-03-16 24.mp4';
import img_45 from './assets/2017-03-16 24.mp4.png';
import video_46 from './assets/2017-03-22 408.mp4';
import img_46 from './assets/2017-03-22 408.mp4.png';
import video_47 from './assets/2017-03-29 436.mp4';
import img_47 from './assets/2017-03-29 436.mp4.png';
import video_48 from './assets/2017-03-30 164.mp4';
import img_48 from './assets/2017-03-30 164.mp4.png';
import video_49 from './assets/2017-04-02 166.mp4';
import img_49 from './assets/2017-04-02 166.mp4.png';
import video_50 from './assets/2017-04-04 261.mp4';
import img_50 from './assets/2017-04-04 261.mp4.png';
import video_51 from './assets/2017-04-14 132.mp4';
import img_51 from './assets/2017-04-14 132.mp4.png';
import video_52 from './assets/2017-04-14 456.mp4';
import img_52 from './assets/2017-04-14 456.mp4.png';
import video_53 from './assets/2017-04-14 51.mp4';
import img_53 from './assets/2017-04-14 51.mp4.png';
import video_54 from './assets/2017-04-16 364.mp4';
import img_54 from './assets/2017-04-16 364.mp4.png';
import video_55 from './assets/2017-04-22 176.mp4';
import img_55 from './assets/2017-04-22 176.mp4.png';
import video_56 from './assets/2017-04-27 251.mp4';
import img_56 from './assets/2017-04-27 251.mp4.png';
import video_57 from './assets/2017-05-01 122.mp4';
import img_57 from './assets/2017-05-01 122.mp4.png';
import video_58 from './assets/2017-05-01 182.mp4';
import img_58 from './assets/2017-05-01 182.mp4.png';
import video_59 from './assets/2017-05-01 415.mp4';
import img_59 from './assets/2017-05-01 415.mp4.png';
import video_60 from './assets/2017-05-02 357.mp4';
import img_60 from './assets/2017-05-02 357.mp4.png';
import video_61 from './assets/2017-05-06 150.mp4';
import img_61 from './assets/2017-05-06 150.mp4.png';
import video_62 from './assets/2017-05-07 331.mp4';
import img_62 from './assets/2017-05-07 331.mp4.png';
import video_63 from './assets/2017-05-11 173.mp4';
import img_63 from './assets/2017-05-11 173.mp4.png';
import video_64 from './assets/2017-05-11 45.mp4';
import img_64 from './assets/2017-05-11 45.mp4.png';
import video_65 from './assets/2017-06-05 94.mp4';
import img_65 from './assets/2017-06-05 94.mp4.png';
import video_66 from './assets/2017-06-07 347.mp4';
import img_66 from './assets/2017-06-07 347.mp4.png';
import video_67 from './assets/2017-06-14 24.mp4';
import img_67 from './assets/2017-06-14 24.mp4.png';
import video_68 from './assets/2017-06-15 495.mp4';
import img_68 from './assets/2017-06-15 495.mp4.png';
import video_69 from './assets/2017-06-26 379.mp4';
import img_69 from './assets/2017-06-26 379.mp4.png';
import video_70 from './assets/2017-06-30 127.mp4';
import img_70 from './assets/2017-06-30 127.mp4.png';
import video_71 from './assets/2017-07-02 63.mp4';
import img_71 from './assets/2017-07-02 63.mp4.png';
import video_72 from './assets/2017-07-07 187.mp4';
import img_72 from './assets/2017-07-07 187.mp4.png';
import video_73 from './assets/2017-07-07 301.mp4';
import img_73 from './assets/2017-07-07 301.mp4.png';
import video_74 from './assets/2017-07-15 244.mp4';
import img_74 from './assets/2017-07-15 244.mp4.png';
import video_75 from './assets/2017-07-16 120.mp4';
import img_75 from './assets/2017-07-16 120.mp4.png';
import video_76 from './assets/2017-07-17 290.mp4';
import img_76 from './assets/2017-07-17 290.mp4.png';
import video_77 from './assets/2017-07-21 280.mp4';
import img_77 from './assets/2017-07-21 280.mp4.png';
import video_78 from './assets/2017-07-22 261.mp4';
import img_78 from './assets/2017-07-22 261.mp4.png';
import video_79 from './assets/2017-07-22 474.mp4';
import img_79 from './assets/2017-07-22 474.mp4.png';
import video_80 from './assets/2017-07-24 318.mp4';
import img_80 from './assets/2017-07-24 318.mp4.png';
import video_81 from './assets/2017-07-25 174.mp4';
import img_81 from './assets/2017-07-25 174.mp4.png';
import video_82 from './assets/2017-07-28 432.mp4';
import img_82 from './assets/2017-07-28 432.mp4.png';
import video_83 from './assets/2017-07-29 436.mp4';
import img_83 from './assets/2017-07-29 436.mp4.png';
import video_84 from './assets/2017-07-30 133.mp4';
import img_84 from './assets/2017-07-30 133.mp4.png';
import video_85 from './assets/2017-07-30 241.mp4';
import img_85 from './assets/2017-07-30 241.mp4.png';
import video_86 from './assets/2017-07-30 375.mp4';
import img_86 from './assets/2017-07-30 375.mp4.png';
import video_87 from './assets/2017-07-31 292.mp4';
import img_87 from './assets/2017-07-31 292.mp4.png';

export default class Year2017Q1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_27,
      image: img_27,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_27 }) }>
                    <img src={ img_27 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_28 }) }>
                    <img src={ img_28 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_29 }) }>
                    <img src={ img_29 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_30 }) }>
                    <img src={ img_30 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_31 }) }>
                    <img src={ img_31 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_32 }) }>
                    <img src={ img_32 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_33 }) }>
                    <img src={ img_33 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_34 }) }>
                    <img src={ img_34 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_35 }) }>
                    <img src={ img_35 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_36 }) }>
                    <img src={ img_36 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_37 }) }>
                    <img src={ img_37 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_38 }) }>
                    <img src={ img_38 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_39 }) }>
                    <img src={ img_39 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_40 }) }>
                    <img src={ img_40 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_41 }) }>
                    <img src={ img_41 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_42 }) }>
                    <img src={ img_42 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_43 }) }>
                    <img src={ img_43 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_44 }) }>
                    <img src={ img_44 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_45 }) }>
                    <img src={ img_45 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_46 }) }>
                    <img src={ img_46 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_47 }) }>
                    <img src={ img_47 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_48 }) }>
                    <img src={ img_48 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_49 }) }>
                    <img src={ img_49 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_50 }) }>
                    <img src={ img_50 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_51 }) }>
                    <img src={ img_51 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_52 }) }>
                    <img src={ img_52 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_53 }) }>
                    <img src={ img_53 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_54 }) }>
                    <img src={ img_54 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_55 }) }>
                    <img src={ img_55 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_56 }) }>
                    <img src={ img_56 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_57 }) }>
                    <img src={ img_57 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_58 }) }>
                    <img src={ img_58 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_59 }) }>
                    <img src={ img_59 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_60 }) }>
                    <img src={ img_60 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_61 }) }>
                    <img src={ img_61 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_62 }) }>
                    <img src={ img_62 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_63 }) }>
                    <img src={ img_63 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_64 }) }>
                    <img src={ img_64 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_65 }) }>
                    <img src={ img_65 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_66 }) }>
                    <img src={ img_66 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_67 }) }>
                    <img src={ img_67 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_68 }) }>
                    <img src={ img_68 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_69 }) }>
                    <img src={ img_69 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_70 }) }>
                    <img src={ img_70 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_71 }) }>
                    <img src={ img_71 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_72 }) }>
                    <img src={ img_72 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_73 }) }>
                    <img src={ img_73 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_74 }) }>
                    <img src={ img_74 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_75 }) }>
                    <img src={ img_75 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_76 }) }>
                    <img src={ img_76 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_77 }) }>
                    <img src={ img_77 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_78 }) }>
                    <img src={ img_78 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_79 }) }>
                    <img src={ img_79 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_80 }) }>
                    <img src={ img_80 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_81 }) }>
                    <img src={ img_81 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_82 }) }>
                    <img src={ img_82 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_83 }) }>
                    <img src={ img_83 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_84 }) }>
                    <img src={ img_84 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_85 }) }>
                    <img src={ img_85 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_86 }) }>
                    <img src={ img_86 } className={ this.state.picSizeMode } />
            
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_87 }) }>
                    <img src={ img_87 } className={ this.state.picSizeMode } />
            
                </div>
            </div>
        </div>
    );
  }
}
