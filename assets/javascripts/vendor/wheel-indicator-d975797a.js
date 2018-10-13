var WheelIndicator=function(){function t(t){var e={callback:function(){},elem:document,preventMouse:!0};this.eventWheel="onwheel"in document?"wheel":"mousewheel",this._options=a(e,t),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var r=this;this._wheelHandler=function(t){r._isWorking&&(n.call(r,t),r._options.preventMouse&&i(t))},o(this._options.elem,this.eventWheel,this._wheelHandler)}function e(t){t.direction=this._direction,this._options.callback.call(this,t)}function i(t){t=t||window.event,t.preventDefault?t.preventDefault():t.returnValue=!1}function n(t){var i=this,n=h(t);if(0!==n){var o,s=n>0?"down":"up",a=i._deltaArray.length,c=!1,l=0;for(clearTimeout(i._timer),i._timer=setTimeout(function(){i._deltaArray=[0,0,0],i._isStopped=!0,i._direction=s},150),o=0;o<a;o++)0!==i._deltaArray[o]&&(i._deltaArray[o]>0?++l:--l);Math.abs(l)===a&&(l>0?"down":"up")!==i._direction&&(c=!0,i._direction=s),i._isStopped||(c?(i._isAcceleration=!0,e.call(this,t)):Math.abs(l)===a&&r.call(this,t)),i._isStopped&&(i._isStopped=!1,i._isAcceleration=!0,i._direction=s,e.call(this,t)),i._deltaArray.shift(),i._deltaArray.push(n)}}function r(t){var i=Math.abs(this._deltaArray[0]),n=Math.abs(this._deltaArray[1]),r=Math.abs(this._deltaArray[2]),o=Math.abs(h(t));o>r&&r>n&&n>i&&(this._isAcceleration||(e.call(this,t),this._isAcceleration=!0)),o<r&&r<=n&&(this._isAcceleration=!1)}function o(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)}function s(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i)}function a(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}t.prototype={constructor:t,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(t){return this._options=a(this._options,t),this},getOption:function(t){var e=this._options[t];if(e!==undefined)return e;throw new Error("Unknown option")},destroy:function(){return s(this._options.elem,this.eventWheel,this._wheelHandler),this}};var h=function(t){return(h=t.wheelDelta&&!t.deltaY?function(t){return-1*t.wheelDelta}:function(t){return t.deltaY})(t)};return t}();"object"==typeof exports&&(module.exports=WheelIndicator);