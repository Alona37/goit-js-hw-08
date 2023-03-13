import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _throttle(onPlay, 1000));
function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
