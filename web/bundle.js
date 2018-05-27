const result = {}
let tmp = {}
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['drawArraysInstancedANGLE'] = typeof ANGLE_instanced_arrays !== 'undefined' && typeof ANGLE_instanced_arrays.prototype !== 'undefined' && ANGLE_instanced_arrays.prototype.hasOwnProperty('drawArraysInstancedANGLE')
tmp['method']['drawElementsInstancedANGLE'] = typeof ANGLE_instanced_arrays !== 'undefined' && typeof ANGLE_instanced_arrays.prototype !== 'undefined' && ANGLE_instanced_arrays.prototype.hasOwnProperty('drawElementsInstancedANGLE')
tmp['method']['vertexAttribDivisorANGLE'] = typeof ANGLE_instanced_arrays !== 'undefined' && typeof ANGLE_instanced_arrays.prototype !== 'undefined' && ANGLE_instanced_arrays.prototype.hasOwnProperty('vertexAttribDivisorANGLE')
result['ANGLE_instanced_arrays'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['signal'] = typeof AbortController !== 'undefined' && typeof AbortController.prototype !== 'undefined' && AbortController.prototype.hasOwnProperty('signal')
tmp['method']['abort'] = typeof AbortController !== 'undefined' && typeof AbortController.prototype !== 'undefined' && AbortController.prototype.hasOwnProperty('abort')
result['AbortController'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['aborted'] = typeof AbortSignal !== 'undefined' && typeof AbortSignal.prototype !== 'undefined' && AbortSignal.prototype.hasOwnProperty('aborted')
tmp['property']['onabort'] = typeof AbortSignal !== 'undefined' && typeof AbortSignal.prototype !== 'undefined' && AbortSignal.prototype.hasOwnProperty('onabort')
result['AbortSignal'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof AbstractWorker !== 'undefined' && typeof AbstractWorker.prototype !== 'undefined' && AbstractWorker.prototype.hasOwnProperty('onerror')
result['AbstractWorker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['reading'] = typeof AmbientLightSensor !== 'undefined' && typeof AmbientLightSensor.prototype !== 'undefined' && AmbientLightSensor.prototype.hasOwnProperty('reading')
result['AmbientLightSensor'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['illuminance'] = typeof AmbientLightSensorReading !== 'undefined' && typeof AmbientLightSensorReading.prototype !== 'undefined' && AmbientLightSensorReading.prototype.hasOwnProperty('illuminance')
result['AmbientLightSensorReading'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['fftSize'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('fftSize')
tmp['property']['frequencyBinCount'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('frequencyBinCount')
tmp['property']['maxDecibels'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('maxDecibels')
tmp['property']['minDecibels'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('minDecibels')
tmp['property']['smoothingTimeConstant'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('smoothingTimeConstant')
tmp['method']['getByteFrequencyData'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('getByteFrequencyData')
tmp['method']['getByteTimeDomainData'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('getByteTimeDomainData')
tmp['method']['getFloatFrequencyData'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('getFloatFrequencyData')
tmp['method']['getFloatTimeDomainData'] = typeof AnalyserNode !== 'undefined' && typeof AnalyserNode.prototype !== 'undefined' && AnalyserNode.prototype.hasOwnProperty('getFloatTimeDomainData')
result['AnalyserNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentTime'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('currentTime')
tmp['property']['effect'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('effect')
tmp['property']['finished'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('finished')
tmp['property']['id'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('id')
tmp['property']['oncancel'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('oncancel')
tmp['property']['onfinish'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('onfinish')
tmp['property']['pending'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('pending')
tmp['property']['playbackRate'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('playbackRate')
tmp['property']['playState'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('playState')
tmp['property']['ready'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('ready')
tmp['property']['startTime'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('startTime')
tmp['property']['timeline'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('timeline')
tmp['method']['cancel'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('cancel')
tmp['method']['finish'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('finish')
tmp['method']['pause'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('pause')
tmp['method']['play'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('play')
tmp['method']['reverse'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('reverse')
tmp['method']['updatePlaybackRate'] = typeof Animation !== 'undefined' && typeof Animation.prototype !== 'undefined' && Animation.prototype.hasOwnProperty('updatePlaybackRate')
result['Animation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['timing'] = typeof AnimationEffectReadOnly !== 'undefined' && typeof AnimationEffectReadOnly.prototype !== 'undefined' && AnimationEffectReadOnly.prototype.hasOwnProperty('timing')
tmp['method']['getComputedTiming'] = typeof AnimationEffectReadOnly !== 'undefined' && typeof AnimationEffectReadOnly.prototype !== 'undefined' && AnimationEffectReadOnly.prototype.hasOwnProperty('getComputedTiming')
result['AnimationEffectReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AnimationEffectTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['delay'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('delay')
tmp['property']['direction'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('direction')
tmp['property']['duration'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('duration')
tmp['property']['easing'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('easing')
tmp['property']['endDelay'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('endDelay')
tmp['property']['fill'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('fill')
tmp['property']['iterations'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('iterations')
tmp['property']['iterationStart'] = typeof AnimationEffectTimingProperties !== 'undefined' && typeof AnimationEffectTimingProperties.prototype !== 'undefined' && AnimationEffectTimingProperties.prototype.hasOwnProperty('iterationStart')
result['AnimationEffectTimingProperties'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['delay'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('delay')
tmp['property']['direction'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('direction')
tmp['property']['duration'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('duration')
tmp['property']['easing'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('easing')
tmp['property']['endDelay'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('endDelay')
tmp['property']['fill'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('fill')
tmp['property']['iterations'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('iterations')
tmp['property']['iterationStart'] = typeof AnimationEffectTimingReadOnly !== 'undefined' && typeof AnimationEffectTimingReadOnly.prototype !== 'undefined' && AnimationEffectTimingReadOnly.prototype.hasOwnProperty('iterationStart')
result['AnimationEffectTimingReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['animationName'] = typeof AnimationEvent !== 'undefined' && typeof AnimationEvent.prototype !== 'undefined' && AnimationEvent.prototype.hasOwnProperty('animationName')
tmp['property']['elapsedTime'] = typeof AnimationEvent !== 'undefined' && typeof AnimationEvent.prototype !== 'undefined' && AnimationEvent.prototype.hasOwnProperty('elapsedTime')
tmp['property']['pseudoElement'] = typeof AnimationEvent !== 'undefined' && typeof AnimationEvent.prototype !== 'undefined' && AnimationEvent.prototype.hasOwnProperty('pseudoElement')
tmp['method']['initAnimationEvent'] = typeof AnimationEvent !== 'undefined' && typeof AnimationEvent.prototype !== 'undefined' && AnimationEvent.prototype.hasOwnProperty('initAnimationEvent')
result['AnimationEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentTime'] = typeof AnimationPlaybackEvent !== 'undefined' && typeof AnimationPlaybackEvent.prototype !== 'undefined' && AnimationPlaybackEvent.prototype.hasOwnProperty('currentTime')
tmp['property']['timelineTime'] = typeof AnimationPlaybackEvent !== 'undefined' && typeof AnimationPlaybackEvent.prototype !== 'undefined' && AnimationPlaybackEvent.prototype.hasOwnProperty('timelineTime')
result['AnimationPlaybackEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentTime'] = typeof AnimationTimeline !== 'undefined' && typeof AnimationTimeline.prototype !== 'undefined' && AnimationTimeline.prototype.hasOwnProperty('currentTime')
result['AnimationTimeline'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['Function.arguments'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.arguments')
tmp['property']['Function.arity'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.arity')
tmp['property']['Function.caller'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.caller')
tmp['property']['Function.displayName'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.displayName')
tmp['property']['Function.length'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.length')
tmp['property']['Function.name'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.name')
tmp['property']['Function.prototype'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype')
tmp['method']['Function.prototype.apply'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.apply')
tmp['method']['Function.prototype.bind'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.bind')
tmp['method']['Function.prototype.call'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.call')
tmp['method']['Function.prototype.isGenerator'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.isGenerator')
tmp['method']['Function.prototype.toSource'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.toSource')
tmp['method']['Function.prototype.toString'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Function.prototype.toString')
tmp['property']['Object.prototype.__count__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__count__')
tmp['property']['Object.prototype.__noSuchMethod__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__noSuchMethod__')
tmp['property']['Object.prototype.__parent__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__parent__')
tmp['property']['Object.prototype.__proto__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__proto__')
tmp['property']['Object.prototype.constructor'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.constructor')
tmp['method']['Object.prototype.__defineGetter__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__defineGetter__')
tmp['method']['Object.prototype.__defineSetter__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__defineSetter__')
tmp['method']['Object.prototype.__lookupGetter__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__lookupGetter__')
tmp['method']['Object.prototype.__lookupSetter__'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.__lookupSetter__')
tmp['method']['Object.prototype.hasOwnProperty'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.hasOwnProperty')
tmp['method']['Object.prototype.isPrototypeOf'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.isPrototypeOf')
tmp['method']['Object.prototype.propertyIsEnumerable'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.propertyIsEnumerable')
tmp['method']['Object.prototype.toLocaleString'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.toLocaleString')
tmp['method']['Object.prototype.toSource'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.toSource')
tmp['method']['Object.prototype.toString'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.toString')
tmp['method']['Object.prototype.unwatch'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.unwatch')
tmp['method']['Object.prototype.valueOf'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.valueOf')
tmp['method']['Object.prototype.watch'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.prototype.watch')
tmp['method']['Object.setPrototypeOf'] = typeof ArrayBufferView !== 'undefined' && typeof ArrayBufferView.prototype !== 'undefined' && ArrayBufferView.prototype.hasOwnProperty('Object.setPrototypeOf')
result['ArrayBufferView'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['localName'] = typeof Attr !== 'undefined' && typeof Attr.prototype !== 'undefined' && Attr.prototype.hasOwnProperty('localName')
tmp['property']['namespaceURI'] = typeof Attr !== 'undefined' && typeof Attr.prototype !== 'undefined' && Attr.prototype.hasOwnProperty('namespaceURI')
tmp['property']['prefix'] = typeof Attr !== 'undefined' && typeof Attr.prototype !== 'undefined' && Attr.prototype.hasOwnProperty('prefix')
result['Attr'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['duration'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('duration')
tmp['property']['length'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('length')
tmp['property']['numberOfChannels'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('numberOfChannels')
tmp['property']['sampleRate'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('sampleRate')
tmp['method']['copyFromChannel'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('copyFromChannel')
tmp['method']['copyToChannel'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('copyToChannel')
tmp['method']['getChannelData'] = typeof AudioBuffer !== 'undefined' && typeof AudioBuffer.prototype !== 'undefined' && AudioBuffer.prototype.hasOwnProperty('getChannelData')
result['AudioBuffer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['buffer'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('buffer')
tmp['property']['detune'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('detune')
tmp['property']['loop'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('loop')
tmp['property']['loopEnd'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('loopEnd')
tmp['property']['loopStart'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('loopStart')
tmp['property']['playbackRate'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('playbackRate')
tmp['method']['start'] = typeof AudioBufferSourceNode !== 'undefined' && typeof AudioBufferSourceNode.prototype !== 'undefined' && AudioBufferSourceNode.prototype.hasOwnProperty('start')
result['AudioBufferSourceNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['baseLatency'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('baseLatency')
tmp['property']['outputLatency'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('outputLatency')
tmp['method']['close'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('close')
tmp['method']['createJavaScriptNode'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createJavaScriptNode')
tmp['method']['createMediaElementSource'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createMediaElementSource')
tmp['method']['createMediaStreamDestination'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createMediaStreamDestination')
tmp['method']['createMediaStreamSource'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createMediaStreamSource')
tmp['method']['createMediaStreamTrackSource'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createMediaStreamTrackSource')
tmp['method']['createWaveTable'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('createWaveTable')
tmp['method']['getOutputTimestamp'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('getOutputTimestamp')
tmp['method']['suspend'] = typeof AudioContext !== 'undefined' && typeof AudioContext.prototype !== 'undefined' && AudioContext.prototype.hasOwnProperty('suspend')
result['AudioContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AudioContextLatencyCategory'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['latencyHint'] = typeof AudioContextOptions !== 'undefined' && typeof AudioContextOptions.prototype !== 'undefined' && AudioContextOptions.prototype.hasOwnProperty('latencyHint')
result['AudioContextOptions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['maxChannelCount'] = typeof AudioDestinationNode !== 'undefined' && typeof AudioDestinationNode.prototype !== 'undefined' && AudioDestinationNode.prototype.hasOwnProperty('maxChannelCount')
result['AudioDestinationNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dopplerFactor'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('dopplerFactor')
tmp['property']['forwardX'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('forwardX')
tmp['property']['forwardY'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('forwardY')
tmp['property']['forwardZ'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('forwardZ')
tmp['property']['positionX'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('positionX')
tmp['property']['positionY'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('positionY')
tmp['property']['positionZ'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('positionZ')
tmp['property']['speedOfSound'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('speedOfSound')
tmp['property']['upX'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('upX')
tmp['property']['upY'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('upY')
tmp['property']['upZ'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('upZ')
tmp['method']['setOrientation'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('setOrientation')
tmp['method']['setPosition'] = typeof AudioListener !== 'undefined' && typeof AudioListener.prototype !== 'undefined' && AudioListener.prototype.hasOwnProperty('setPosition')
result['AudioListener'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['channelCount'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('channelCount')
tmp['property']['channelCountMode'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('channelCountMode')
tmp['property']['channelInterpretation'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('channelInterpretation')
tmp['property']['context'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('context')
tmp['property']['numberOfInputs'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('numberOfInputs')
tmp['property']['numberOfOutputs'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('numberOfOutputs')
tmp['method']['connect'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('connect')
tmp['method']['disconnect'] = typeof AudioNode !== 'undefined' && typeof AudioNode.prototype !== 'undefined' && AudioNode.prototype.hasOwnProperty('disconnect')
result['AudioNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AudioNodeOptions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['defaultValue'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('defaultValue')
tmp['property']['maxValue'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('maxValue')
tmp['property']['minValue'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('minValue')
tmp['property']['value'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('value')
tmp['method']['cancelAndHoldAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('cancelAndHoldAtTime')
tmp['method']['cancelScheduledValues'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('cancelScheduledValues')
tmp['method']['exponentialRampToValueAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('exponentialRampToValueAtTime')
tmp['method']['linearRampToValueAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('linearRampToValueAtTime')
tmp['method']['setTargetAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('setTargetAtTime')
tmp['method']['setValueAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('setValueAtTime')
tmp['method']['setValueCurveAtTime'] = typeof AudioParam !== 'undefined' && typeof AudioParam.prototype !== 'undefined' && AudioParam.prototype.hasOwnProperty('setValueCurveAtTime')
result['AudioParam'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AudioProcessingEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onended'] = typeof AudioScheduledSourceNode !== 'undefined' && typeof AudioScheduledSourceNode.prototype !== 'undefined' && AudioScheduledSourceNode.prototype.hasOwnProperty('onended')
tmp['method']['start'] = typeof AudioScheduledSourceNode !== 'undefined' && typeof AudioScheduledSourceNode.prototype !== 'undefined' && AudioScheduledSourceNode.prototype.hasOwnProperty('start')
tmp['method']['stop'] = typeof AudioScheduledSourceNode !== 'undefined' && typeof AudioScheduledSourceNode.prototype !== 'undefined' && AudioScheduledSourceNode.prototype.hasOwnProperty('stop')
result['AudioScheduledSourceNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AuthenticatorAssertionResponse'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AuthenticatorAttestationResponse'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['AuthenticatorResponse'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentTime'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('currentTime')
tmp['property']['destination'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('destination')
tmp['property']['listener'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('listener')
tmp['property']['sampleRate'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('sampleRate')
tmp['property']['state'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('state')
tmp['method']['createAnalyser'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createAnalyser')
tmp['method']['createBiquadFilter'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createBiquadFilter')
tmp['method']['createBuffer'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createBuffer')
tmp['method']['createBufferSource'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createBufferSource')
tmp['method']['createChannelMerger'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createChannelMerger')
tmp['method']['createChannelSplitter'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createChannelSplitter')
tmp['method']['createConstantSource'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createConstantSource')
tmp['method']['createConvolver'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createConvolver')
tmp['method']['createDelay'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createDelay')
tmp['method']['createDynamicsCompressor'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createDynamicsCompressor')
tmp['method']['createGain'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createGain')
tmp['method']['createIIRFilter'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createIIRFilter')
tmp['method']['createOscillator'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createOscillator')
tmp['method']['createPanner'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createPanner')
tmp['method']['createPeriodicWave'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createPeriodicWave')
tmp['method']['createScriptProcessor'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createScriptProcessor')
tmp['method']['createStereoPanner'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createStereoPanner')
tmp['method']['createWaveShaper'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('createWaveShaper')
tmp['method']['decodeAudioData'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('decodeAudioData')
tmp['method']['resume'] = typeof BaseAudioContext !== 'undefined' && typeof BaseAudioContext.prototype !== 'undefined' && BaseAudioContext.prototype.hasOwnProperty('resume')
result['BaseAudioContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['supportedNetworks'] = typeof BasicCardRequest !== 'undefined' && typeof BasicCardRequest.prototype !== 'undefined' && BasicCardRequest.prototype.hasOwnProperty('supportedNetworks')
tmp['property']['supportedTypes'] = typeof BasicCardRequest !== 'undefined' && typeof BasicCardRequest.prototype !== 'undefined' && BasicCardRequest.prototype.hasOwnProperty('supportedTypes')
result['BasicCardRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['billingAddress'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('billingAddress')
tmp['property']['cardholderName'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('cardholderName')
tmp['property']['cardNumber'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('cardNumber')
tmp['property']['cardSecurityCode'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('cardSecurityCode')
tmp['property']['expiryMonth'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('expiryMonth')
tmp['property']['expiryYear'] = typeof BasicCardResponse !== 'undefined' && typeof BasicCardResponse.prototype !== 'undefined' && BasicCardResponse.prototype.hasOwnProperty('expiryYear')
result['BasicCardResponse'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['charging'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('charging')
tmp['property']['chargingTime'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('chargingTime')
tmp['property']['dischargingTime'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('dischargingTime')
tmp['property']['level'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('level')
tmp['property']['onchargingchange'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('onchargingchange')
tmp['property']['onchargingtimechange'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('onchargingtimechange')
tmp['property']['ondischargingtimechange'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('ondischargingtimechange')
tmp['property']['onlevelchange'] = typeof BatteryManager !== 'undefined' && typeof BatteryManager.prototype !== 'undefined' && BatteryManager.prototype.hasOwnProperty('onlevelchange')
result['BatteryManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['prompt'] = typeof BeforeInstallPromptEvent !== 'undefined' && typeof BeforeInstallPromptEvent.prototype !== 'undefined' && BeforeInstallPromptEvent.prototype.hasOwnProperty('prompt')
result['BeforeInstallPromptEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['BeforeUnloadEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['detune'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('detune')
tmp['property']['frequency'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('frequency')
tmp['property']['gain'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('gain')
tmp['property']['Q'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('Q')
tmp['property']['type'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('type')
tmp['method']['getFrequencyResponse'] = typeof BiquadFilterNode !== 'undefined' && typeof BiquadFilterNode.prototype !== 'undefined' && BiquadFilterNode.prototype.hasOwnProperty('getFrequencyResponse')
result['BiquadFilterNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['size'] = typeof Blob !== 'undefined' && typeof Blob.prototype !== 'undefined' && Blob.prototype.hasOwnProperty('size')
tmp['property']['type'] = typeof Blob !== 'undefined' && typeof Blob.prototype !== 'undefined' && Blob.prototype.hasOwnProperty('type')
tmp['method']['slice'] = typeof Blob !== 'undefined' && typeof Blob.prototype !== 'undefined' && Blob.prototype.hasOwnProperty('slice')
result['Blob'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['BlobBuilder'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof BlobEvent !== 'undefined' && typeof BlobEvent.prototype !== 'undefined' && BlobEvent.prototype.hasOwnProperty('data')
tmp['property']['timecode'] = typeof BlobEvent !== 'undefined' && typeof BlobEvent.prototype !== 'undefined' && BlobEvent.prototype.hasOwnProperty('timecode')
result['BlobEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['requestDevice'] = typeof Bluetooth !== 'undefined' && typeof Bluetooth.prototype !== 'undefined' && Bluetooth.prototype.hasOwnProperty('requestDevice')
result['Bluetooth'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['appearance'] = typeof BluetoothAdvertisingData !== 'undefined' && typeof BluetoothAdvertisingData.prototype !== 'undefined' && BluetoothAdvertisingData.prototype.hasOwnProperty('appearance')
tmp['property']['manufacturerData'] = typeof BluetoothAdvertisingData !== 'undefined' && typeof BluetoothAdvertisingData.prototype !== 'undefined' && BluetoothAdvertisingData.prototype.hasOwnProperty('manufacturerData')
tmp['property']['rssi'] = typeof BluetoothAdvertisingData !== 'undefined' && typeof BluetoothAdvertisingData.prototype !== 'undefined' && BluetoothAdvertisingData.prototype.hasOwnProperty('rssi')
tmp['property']['serviceData'] = typeof BluetoothAdvertisingData !== 'undefined' && typeof BluetoothAdvertisingData.prototype !== 'undefined' && BluetoothAdvertisingData.prototype.hasOwnProperty('serviceData')
tmp['property']['txPower'] = typeof BluetoothAdvertisingData !== 'undefined' && typeof BluetoothAdvertisingData.prototype !== 'undefined' && BluetoothAdvertisingData.prototype.hasOwnProperty('txPower')
result['BluetoothAdvertisingData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['BluetoothCharacteristicProperties'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['getDescriptor()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('getDescriptor()')
tmp['property']['getDescriptors()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('getDescriptors()')
tmp['property']['properties'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('properties')
tmp['property']['readValue()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('readValue()')
tmp['property']['service'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('service')
tmp['property']['startNotifications()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('startNotifications()')
tmp['property']['stopNotifications()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('stopNotifications()')
tmp['property']['uuid'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('uuid')
tmp['property']['value'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('value')
tmp['property']['writeValue()'] = typeof BluetoothRemoteGATTCharacteristic !== 'undefined' && typeof BluetoothRemoteGATTCharacteristic.prototype !== 'undefined' && BluetoothRemoteGATTCharacteristic.prototype.hasOwnProperty('writeValue()')
result['BluetoothRemoteGATTCharacteristic'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['BluetoothRemoteGATTDescriptor'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['connected'] = typeof BluetoothRemoteGATTServer !== 'undefined' && typeof BluetoothRemoteGATTServer.prototype !== 'undefined' && BluetoothRemoteGATTServer.prototype.hasOwnProperty('connected')
tmp['method']['connect'] = typeof BluetoothRemoteGATTServer !== 'undefined' && typeof BluetoothRemoteGATTServer.prototype !== 'undefined' && BluetoothRemoteGATTServer.prototype.hasOwnProperty('connect')
tmp['method']['disconnect'] = typeof BluetoothRemoteGATTServer !== 'undefined' && typeof BluetoothRemoteGATTServer.prototype !== 'undefined' && BluetoothRemoteGATTServer.prototype.hasOwnProperty('disconnect')
tmp['method']['getPrimaryService'] = typeof BluetoothRemoteGATTServer !== 'undefined' && typeof BluetoothRemoteGATTServer.prototype !== 'undefined' && BluetoothRemoteGATTServer.prototype.hasOwnProperty('getPrimaryService')
tmp['method']['getPrimaryServices'] = typeof BluetoothRemoteGATTServer !== 'undefined' && typeof BluetoothRemoteGATTServer.prototype !== 'undefined' && BluetoothRemoteGATTServer.prototype.hasOwnProperty('getPrimaryServices')
result['BluetoothRemoteGATTServer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['device'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('device')
tmp['property']['getCharacteristic()'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('getCharacteristic()')
tmp['property']['getCharacteristics()'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('getCharacteristics()')
tmp['property']['getIncludedService()'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('getIncludedService()')
tmp['property']['getIncludedServices()'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('getIncludedServices()')
tmp['property']['isPrimary'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('isPrimary')
tmp['property']['uuid'] = typeof BluetoothRemoteGATTService !== 'undefined' && typeof BluetoothRemoteGATTService.prototype !== 'undefined' && BluetoothRemoteGATTService.prototype.hasOwnProperty('uuid')
result['BluetoothRemoteGATTService'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['address'] = typeof BluetoothStatusChangedEvent !== 'undefined' && typeof BluetoothStatusChangedEvent.prototype !== 'undefined' && BluetoothStatusChangedEvent.prototype.hasOwnProperty('address')
tmp['property']['status'] = typeof BluetoothStatusChangedEvent !== 'undefined' && typeof BluetoothStatusChangedEvent.prototype !== 'undefined' && BluetoothStatusChangedEvent.prototype.hasOwnProperty('status')
result['BluetoothStatusChangedEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['body'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('body')
tmp['property']['bodyUsed'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('bodyUsed')
tmp['method']['arrayBuffer'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('arrayBuffer')
tmp['method']['blob'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('blob')
tmp['method']['formData'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('formData')
tmp['method']['json'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('json')
tmp['method']['text'] = typeof Body !== 'undefined' && typeof Body.prototype !== 'undefined' && Body.prototype.hasOwnProperty('text')
result['Body'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof BroadcastChannel !== 'undefined' && typeof BroadcastChannel.prototype !== 'undefined' && BroadcastChannel.prototype.hasOwnProperty('name')
tmp['property']['onmessage'] = typeof BroadcastChannel !== 'undefined' && typeof BroadcastChannel.prototype !== 'undefined' && BroadcastChannel.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof BroadcastChannel !== 'undefined' && typeof BroadcastChannel.prototype !== 'undefined' && BroadcastChannel.prototype.hasOwnProperty('onmessageerror')
tmp['method']['close'] = typeof BroadcastChannel !== 'undefined' && typeof BroadcastChannel.prototype !== 'undefined' && BroadcastChannel.prototype.hasOwnProperty('close')
tmp['method']['postMessage'] = typeof BroadcastChannel !== 'undefined' && typeof BroadcastChannel.prototype !== 'undefined' && BroadcastChannel.prototype.hasOwnProperty('postMessage')
result['BroadcastChannel'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getBudget'] = typeof BudgetService !== 'undefined' && typeof BudgetService.prototype !== 'undefined' && BudgetService.prototype.hasOwnProperty('getBudget')
tmp['method']['getCost'] = typeof BudgetService !== 'undefined' && typeof BudgetService.prototype !== 'undefined' && BudgetService.prototype.hasOwnProperty('getCost')
tmp['method']['reserve'] = typeof BudgetService !== 'undefined' && typeof BudgetService.prototype !== 'undefined' && BudgetService.prototype.hasOwnProperty('reserve')
result['BudgetService'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['budgetAt'] = typeof BudgetState !== 'undefined' && typeof BudgetState.prototype !== 'undefined' && BudgetState.prototype.hasOwnProperty('budgetAt')
tmp['property']['time'] = typeof BudgetState !== 'undefined' && typeof BudgetState.prototype !== 'undefined' && BudgetState.prototype.hasOwnProperty('time')
result['BudgetState'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['Function.arguments'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.arguments')
tmp['property']['Function.arity'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.arity')
tmp['property']['Function.caller'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.caller')
tmp['property']['Function.displayName'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.displayName')
tmp['property']['Function.length'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.length')
tmp['property']['Function.name'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.name')
tmp['property']['Function.prototype'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype')
tmp['method']['Function.prototype.apply'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.apply')
tmp['method']['Function.prototype.bind'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.bind')
tmp['method']['Function.prototype.call'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.call')
tmp['method']['Function.prototype.isGenerator'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.isGenerator')
tmp['method']['Function.prototype.toSource'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.toSource')
tmp['method']['Function.prototype.toString'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Function.prototype.toString')
tmp['property']['Object.prototype.__count__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__count__')
tmp['property']['Object.prototype.__noSuchMethod__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__noSuchMethod__')
tmp['property']['Object.prototype.__parent__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__parent__')
tmp['property']['Object.prototype.__proto__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__proto__')
tmp['property']['Object.prototype.constructor'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.constructor')
tmp['method']['Object.prototype.__defineGetter__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__defineGetter__')
tmp['method']['Object.prototype.__defineSetter__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__defineSetter__')
tmp['method']['Object.prototype.__lookupGetter__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__lookupGetter__')
tmp['method']['Object.prototype.__lookupSetter__'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.__lookupSetter__')
tmp['method']['Object.prototype.hasOwnProperty'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.hasOwnProperty')
tmp['method']['Object.prototype.isPrototypeOf'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.isPrototypeOf')
tmp['method']['Object.prototype.propertyIsEnumerable'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.propertyIsEnumerable')
tmp['method']['Object.prototype.toLocaleString'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.toLocaleString')
tmp['method']['Object.prototype.toSource'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.toSource')
tmp['method']['Object.prototype.toString'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.toString')
tmp['method']['Object.prototype.unwatch'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.unwatch')
tmp['method']['Object.prototype.valueOf'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.valueOf')
tmp['method']['Object.prototype.watch'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.prototype.watch')
tmp['method']['Object.setPrototypeOf'] = typeof BufferSource !== 'undefined' && typeof BufferSource.prototype !== 'undefined' && BufferSource.prototype.hasOwnProperty('Object.setPrototypeOf')
result['BufferSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['size'] = typeof ByteLengthQueuingStrategy !== 'undefined' && typeof ByteLengthQueuingStrategy.prototype !== 'undefined' && ByteLengthQueuingStrategy.prototype.hasOwnProperty('size')
result['ByteLengthQueuingStrategy'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ByteString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CDATASection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['escape'] = typeof CSS !== 'undefined' && typeof CSS.prototype !== 'undefined' && CSS.prototype.hasOwnProperty('escape')
tmp['method']['supports'] = typeof CSS !== 'undefined' && typeof CSS.prototype !== 'undefined' && CSS.prototype.hasOwnProperty('supports')
result['CSS'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSConditionRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSCounterStyleRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSGroupingRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSKeyframeRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSKeyframesRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSMatrix'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSMediaRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['namespaceURI'] = typeof CSSNamespaceRule !== 'undefined' && typeof CSSNamespaceRule.prototype !== 'undefined' && CSSNamespaceRule.prototype.hasOwnProperty('namespaceURI')
tmp['property']['prefix'] = typeof CSSNamespaceRule !== 'undefined' && typeof CSSNamespaceRule.prototype !== 'undefined' && CSSNamespaceRule.prototype.hasOwnProperty('prefix')
result['CSSNamespaceRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSOMString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSPageRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['primitiveType'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('primitiveType')
tmp['method']['getCounterValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('getCounterValue')
tmp['method']['getFloatValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('getFloatValue')
tmp['method']['getRectValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('getRectValue')
tmp['method']['getRGBColorValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('getRGBColorValue')
tmp['method']['getStringValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('getStringValue')
tmp['method']['setFloatValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('setFloatValue')
tmp['method']['setStringValue'] = typeof CSSPrimitiveValue !== 'undefined' && typeof CSSPrimitiveValue.prototype !== 'undefined' && CSSPrimitiveValue.prototype.hasOwnProperty('setStringValue')
result['CSSPrimitiveValue'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['cssText'] = typeof CSSRule !== 'undefined' && typeof CSSRule.prototype !== 'undefined' && CSSRule.prototype.hasOwnProperty('cssText')
tmp['property']['parentStyleSheet'] = typeof CSSRule !== 'undefined' && typeof CSSRule.prototype !== 'undefined' && CSSRule.prototype.hasOwnProperty('parentStyleSheet')
result['CSSRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSRuleList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('length')
tmp['property']['parentRule'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('parentRule')
tmp['method']['getPropertyCSSValue'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('getPropertyCSSValue')
tmp['method']['getPropertyPriority'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('getPropertyPriority')
tmp['method']['getPropertyValue'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('getPropertyValue')
tmp['method']['item'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('item')
tmp['method']['removeProperty'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('removeProperty')
tmp['method']['setProperty'] = typeof CSSStyleDeclaration !== 'undefined' && typeof CSSStyleDeclaration.prototype !== 'undefined' && CSSStyleDeclaration.prototype.hasOwnProperty('setProperty')
result['CSSStyleDeclaration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['style'] = typeof CSSStyleRule !== 'undefined' && typeof CSSStyleRule.prototype !== 'undefined' && CSSStyleRule.prototype.hasOwnProperty('style')
result['CSSStyleRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['deleteRule'] = typeof CSSStyleSheet !== 'undefined' && typeof CSSStyleSheet.prototype !== 'undefined' && CSSStyleSheet.prototype.hasOwnProperty('deleteRule')
tmp['method']['insertRule'] = typeof CSSStyleSheet !== 'undefined' && typeof CSSStyleSheet.prototype !== 'undefined' && CSSStyleSheet.prototype.hasOwnProperty('insertRule')
result['CSSStyleSheet'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CSSSupportsRule'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['cssText'] = typeof CSSValue !== 'undefined' && typeof CSSValue.prototype !== 'undefined' && CSSValue.prototype.hasOwnProperty('cssText')
tmp['property']['cssValueType'] = typeof CSSValue !== 'undefined' && typeof CSSValue.prototype !== 'undefined' && CSSValue.prototype.hasOwnProperty('cssValueType')
result['CSSValue'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof CSSValueList !== 'undefined' && typeof CSSValueList.prototype !== 'undefined' && CSSValueList.prototype.hasOwnProperty('length')
tmp['method']['item'] = typeof CSSValueList !== 'undefined' && typeof CSSValueList.prototype !== 'undefined' && CSSValueList.prototype.hasOwnProperty('item')
result['CSSValueList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['add'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('add')
tmp['method']['addAll'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('addAll')
tmp['method']['delete'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('delete')
tmp['method']['keys'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('keys')
tmp['method']['match'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('match')
tmp['method']['matchAll'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('matchAll')
tmp['method']['put'] = typeof Cache !== 'undefined' && typeof Cache.prototype !== 'undefined' && Cache.prototype.hasOwnProperty('put')
result['Cache'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['delete'] = typeof CacheStorage !== 'undefined' && typeof CacheStorage.prototype !== 'undefined' && CacheStorage.prototype.hasOwnProperty('delete')
tmp['method']['has'] = typeof CacheStorage !== 'undefined' && typeof CacheStorage.prototype !== 'undefined' && CacheStorage.prototype.hasOwnProperty('has')
tmp['method']['keys'] = typeof CacheStorage !== 'undefined' && typeof CacheStorage.prototype !== 'undefined' && CacheStorage.prototype.hasOwnProperty('keys')
tmp['method']['match'] = typeof CacheStorage !== 'undefined' && typeof CacheStorage.prototype !== 'undefined' && CacheStorage.prototype.hasOwnProperty('match')
tmp['method']['open'] = typeof CacheStorage !== 'undefined' && typeof CacheStorage.prototype !== 'undefined' && CacheStorage.prototype.hasOwnProperty('open')
result['CacheStorage'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['canvas'] = typeof CanvasCaptureMediaStreamTrack !== 'undefined' && typeof CanvasCaptureMediaStreamTrack.prototype !== 'undefined' && CanvasCaptureMediaStreamTrack.prototype.hasOwnProperty('canvas')
tmp['method']['requestFrame'] = typeof CanvasCaptureMediaStreamTrack !== 'undefined' && typeof CanvasCaptureMediaStreamTrack.prototype !== 'undefined' && CanvasCaptureMediaStreamTrack.prototype.hasOwnProperty('requestFrame')
result['CanvasCaptureMediaStreamTrack'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['addColorStop'] = typeof CanvasGradient !== 'undefined' && typeof CanvasGradient.prototype !== 'undefined' && CanvasGradient.prototype.hasOwnProperty('addColorStop')
result['CanvasGradient'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CanvasImageSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['setTransform'] = typeof CanvasPattern !== 'undefined' && typeof CanvasPattern.prototype !== 'undefined' && CanvasPattern.prototype.hasOwnProperty('setTransform')
result['CanvasPattern'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['canvas'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('canvas')
tmp['property']['currentTransform'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('currentTransform')
tmp['property']['direction'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('direction')
tmp['property']['fillStyle'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('fillStyle')
tmp['property']['filter'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('filter')
tmp['property']['font'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('font')
tmp['property']['globalAlpha'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('globalAlpha')
tmp['property']['globalCompositeOperation'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('globalCompositeOperation')
tmp['property']['imageSmoothingEnabled'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('imageSmoothingEnabled')
tmp['property']['imageSmoothingQuality'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('imageSmoothingQuality')
tmp['property']['lineCap'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('lineCap')
tmp['property']['lineDashOffset'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('lineDashOffset')
tmp['property']['lineJoin'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('lineJoin')
tmp['property']['lineWidth'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('lineWidth')
tmp['property']['miterLimit'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('miterLimit')
tmp['property']['shadowBlur'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('shadowBlur')
tmp['property']['shadowColor'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('shadowColor')
tmp['property']['shadowOffsetX'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('shadowOffsetX')
tmp['property']['shadowOffsetY'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('shadowOffsetY')
tmp['property']['strokeStyle'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('strokeStyle')
tmp['property']['textAlign'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('textAlign')
tmp['property']['textBaseline'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('textBaseline')
tmp['method']['addHitRegion'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('addHitRegion')
tmp['method']['arc'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('arc')
tmp['method']['arcTo'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('arcTo')
tmp['method']['beginPath'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('beginPath')
tmp['method']['bezierCurveTo'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('bezierCurveTo')
tmp['method']['clearHitRegions'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('clearHitRegions')
tmp['method']['clearRect'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('clearRect')
tmp['method']['clip'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('clip')
tmp['method']['closePath'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('closePath')
tmp['method']['createImageData'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('createImageData')
tmp['method']['createLinearGradient'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('createLinearGradient')
tmp['method']['createPattern'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('createPattern')
tmp['method']['createRadialGradient'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('createRadialGradient')
tmp['method']['drawFocusIfNeeded'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('drawFocusIfNeeded')
tmp['method']['drawImage'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('drawImage')
tmp['method']['drawWidgetAsOnScreen'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('drawWidgetAsOnScreen')
tmp['method']['drawWindow'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('drawWindow')
tmp['method']['ellipse'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('ellipse')
tmp['method']['fill'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('fill')
tmp['method']['fillRect'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('fillRect')
tmp['method']['fillText'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('fillText')
tmp['method']['getImageData'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('getImageData')
tmp['method']['getLineDash'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('getLineDash')
tmp['method']['isPointInPath'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('isPointInPath')
tmp['method']['isPointInStroke'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('isPointInStroke')
tmp['method']['lineTo'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('lineTo')
tmp['method']['measureText'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('measureText')
tmp['method']['moveTo'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('moveTo')
tmp['method']['putImageData'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('putImageData')
tmp['method']['quadraticCurveTo'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('quadraticCurveTo')
tmp['method']['rect'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('rect')
tmp['method']['removeHitRegion'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('removeHitRegion')
tmp['method']['resetTransform'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('resetTransform')
tmp['method']['restore'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('restore')
tmp['method']['rotate'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('rotate')
tmp['method']['save'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('save')
tmp['method']['scale'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('scale')
tmp['method']['scrollPathIntoView'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('scrollPathIntoView')
tmp['method']['setLineDash'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('setLineDash')
tmp['method']['setTransform'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('setTransform')
tmp['method']['stroke'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('stroke')
tmp['method']['strokeRect'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('strokeRect')
tmp['method']['strokeText'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('strokeText')
tmp['method']['transform'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('transform')
tmp['method']['translate'] = typeof CanvasRenderingContext2D !== 'undefined' && typeof CanvasRenderingContext2D.prototype !== 'undefined' && CanvasRenderingContext2D.prototype.hasOwnProperty('translate')
result['CanvasRenderingContext2D'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CaretPosition'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ChannelMergerNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ChannelSplitterNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['nextElementSibling'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('nextElementSibling')
tmp['property']['previousElementSibling'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('previousElementSibling')
tmp['method']['after'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('after')
tmp['method']['before'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('before')
tmp['method']['remove'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('remove')
tmp['method']['replaceWith'] = typeof CharacterData !== 'undefined' && typeof CharacterData.prototype !== 'undefined' && CharacterData.prototype.hasOwnProperty('replaceWith')
result['CharacterData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['after'] = typeof ChildNode !== 'undefined' && typeof ChildNode.prototype !== 'undefined' && ChildNode.prototype.hasOwnProperty('after')
tmp['method']['before'] = typeof ChildNode !== 'undefined' && typeof ChildNode.prototype !== 'undefined' && ChildNode.prototype.hasOwnProperty('before')
tmp['method']['remove'] = typeof ChildNode !== 'undefined' && typeof ChildNode.prototype !== 'undefined' && ChildNode.prototype.hasOwnProperty('remove')
tmp['method']['replaceWith'] = typeof ChildNode !== 'undefined' && typeof ChildNode.prototype !== 'undefined' && ChildNode.prototype.hasOwnProperty('replaceWith')
result['ChildNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ChromeWorker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['frameType'] = typeof Client !== 'undefined' && typeof Client.prototype !== 'undefined' && Client.prototype.hasOwnProperty('frameType')
tmp['property']['id'] = typeof Client !== 'undefined' && typeof Client.prototype !== 'undefined' && Client.prototype.hasOwnProperty('id')
tmp['property']['type'] = typeof Client !== 'undefined' && typeof Client.prototype !== 'undefined' && Client.prototype.hasOwnProperty('type')
tmp['property']['url'] = typeof Client !== 'undefined' && typeof Client.prototype !== 'undefined' && Client.prototype.hasOwnProperty('url')
tmp['method']['postMessage'] = typeof Client !== 'undefined' && typeof Client.prototype !== 'undefined' && Client.prototype.hasOwnProperty('postMessage')
result['Client'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['claim'] = typeof Clients !== 'undefined' && typeof Clients.prototype !== 'undefined' && Clients.prototype.hasOwnProperty('claim')
tmp['method']['get'] = typeof Clients !== 'undefined' && typeof Clients.prototype !== 'undefined' && Clients.prototype.hasOwnProperty('get')
tmp['method']['matchAll'] = typeof Clients !== 'undefined' && typeof Clients.prototype !== 'undefined' && Clients.prototype.hasOwnProperty('matchAll')
tmp['method']['openWindow'] = typeof Clients !== 'undefined' && typeof Clients.prototype !== 'undefined' && Clients.prototype.hasOwnProperty('openWindow')
result['Clients'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['read'] = typeof Clipboard !== 'undefined' && typeof Clipboard.prototype !== 'undefined' && Clipboard.prototype.hasOwnProperty('read')
tmp['method']['readText'] = typeof Clipboard !== 'undefined' && typeof Clipboard.prototype !== 'undefined' && Clipboard.prototype.hasOwnProperty('readText')
tmp['method']['write'] = typeof Clipboard !== 'undefined' && typeof Clipboard.prototype !== 'undefined' && Clipboard.prototype.hasOwnProperty('write')
tmp['method']['writeText'] = typeof Clipboard !== 'undefined' && typeof Clipboard.prototype !== 'undefined' && Clipboard.prototype.hasOwnProperty('writeText')
result['Clipboard'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['clipboardData'] = typeof ClipboardEvent !== 'undefined' && typeof ClipboardEvent.prototype !== 'undefined' && ClipboardEvent.prototype.hasOwnProperty('clipboardData')
result['ClipboardEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['CloseEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Comment'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof CompositionEvent !== 'undefined' && typeof CompositionEvent.prototype !== 'undefined' && CompositionEvent.prototype.hasOwnProperty('data')
tmp['property']['locale'] = typeof CompositionEvent !== 'undefined' && typeof CompositionEvent.prototype !== 'undefined' && CompositionEvent.prototype.hasOwnProperty('locale')
tmp['method']['initCompositionEvent'] = typeof CompositionEvent !== 'undefined' && typeof CompositionEvent.prototype !== 'undefined' && CompositionEvent.prototype.hasOwnProperty('initCompositionEvent')
result['CompositionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['assert'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('assert')
tmp['method']['clear'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('clear')
tmp['method']['count'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('count')
tmp['method']['dir'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('dir')
tmp['method']['dirxml'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('dirxml')
tmp['method']['error'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('error')
tmp['method']['group'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('group')
tmp['method']['groupCollapsed'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('groupCollapsed')
tmp['method']['groupEnd'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('groupEnd')
tmp['method']['info'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('info')
tmp['method']['log'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('log')
tmp['method']['profile'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('profile')
tmp['method']['profileEnd'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('profileEnd')
tmp['method']['table'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('table')
tmp['method']['time'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('time')
tmp['method']['timeEnd'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('timeEnd')
tmp['method']['timeStamp'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('timeStamp')
tmp['method']['trace'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('trace')
tmp['method']['warn'] = typeof Console !== 'undefined' && typeof Console.prototype !== 'undefined' && Console.prototype.hasOwnProperty('warn')
result['Console'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['offset'] = typeof ConstantSourceNode !== 'undefined' && typeof ConstantSourceNode.prototype !== 'undefined' && ConstantSourceNode.prototype.hasOwnProperty('offset')
result['ConstantSourceNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ConstrainBoolean'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ConstrainDOMString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ConstrainDouble'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ConstrainLong'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['buffer'] = typeof ConvolverNode !== 'undefined' && typeof ConvolverNode.prototype !== 'undefined' && ConvolverNode.prototype.hasOwnProperty('buffer')
tmp['property']['normalize'] = typeof ConvolverNode !== 'undefined' && typeof ConvolverNode.prototype !== 'undefined' && ConvolverNode.prototype.hasOwnProperty('normalize')
result['ConvolverNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['accuracy'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('accuracy')
tmp['property']['altitude'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('altitude')
tmp['property']['altitudeAccuracy'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('altitudeAccuracy')
tmp['property']['heading'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('heading')
tmp['property']['latitude'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('latitude')
tmp['property']['longitude'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('longitude')
tmp['property']['speed'] = typeof Coordinates !== 'undefined' && typeof Coordinates.prototype !== 'undefined' && Coordinates.prototype.hasOwnProperty('speed')
result['Coordinates'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['size'] = typeof CountQueuingStrategy !== 'undefined' && typeof CountQueuingStrategy.prototype !== 'undefined' && CountQueuingStrategy.prototype.hasOwnProperty('size')
result['CountQueuingStrategy'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['iconURL'] = typeof Credential !== 'undefined' && typeof Credential.prototype !== 'undefined' && Credential.prototype.hasOwnProperty('iconURL')
tmp['property']['id'] = typeof Credential !== 'undefined' && typeof Credential.prototype !== 'undefined' && Credential.prototype.hasOwnProperty('id')
tmp['property']['name'] = typeof Credential !== 'undefined' && typeof Credential.prototype !== 'undefined' && Credential.prototype.hasOwnProperty('name')
tmp['property']['type'] = typeof Credential !== 'undefined' && typeof Credential.prototype !== 'undefined' && Credential.prototype.hasOwnProperty('type')
result['Credential'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['create'] = typeof CredentialsContainer !== 'undefined' && typeof CredentialsContainer.prototype !== 'undefined' && CredentialsContainer.prototype.hasOwnProperty('create')
tmp['method']['get'] = typeof CredentialsContainer !== 'undefined' && typeof CredentialsContainer.prototype !== 'undefined' && CredentialsContainer.prototype.hasOwnProperty('get')
tmp['method']['store'] = typeof CredentialsContainer !== 'undefined' && typeof CredentialsContainer.prototype !== 'undefined' && CredentialsContainer.prototype.hasOwnProperty('store')
result['CredentialsContainer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['subtle'] = typeof Crypto !== 'undefined' && typeof Crypto.prototype !== 'undefined' && Crypto.prototype.hasOwnProperty('subtle')
tmp['method']['getRandomValues'] = typeof Crypto !== 'undefined' && typeof Crypto.prototype !== 'undefined' && Crypto.prototype.hasOwnProperty('getRandomValues')
result['Crypto'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['algorithm'] = typeof CryptoKey !== 'undefined' && typeof CryptoKey.prototype !== 'undefined' && CryptoKey.prototype.hasOwnProperty('algorithm')
tmp['property']['extractable'] = typeof CryptoKey !== 'undefined' && typeof CryptoKey.prototype !== 'undefined' && CryptoKey.prototype.hasOwnProperty('extractable')
tmp['property']['type'] = typeof CryptoKey !== 'undefined' && typeof CryptoKey.prototype !== 'undefined' && CryptoKey.prototype.hasOwnProperty('type')
tmp['property']['usages'] = typeof CryptoKey !== 'undefined' && typeof CryptoKey.prototype !== 'undefined' && CryptoKey.prototype.hasOwnProperty('usages')
result['CryptoKey'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['Element.shadowRoot'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Element.shadowRoot')
tmp['property']['Element.slot'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Element.slot')
tmp['property']['Event.composed'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Event.composed')
tmp['property']['Event.composedPath'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Event.composedPath')
tmp['property']['Node.isConnected'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Node.isConnected')
tmp['property']['Window.customElements'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Window.customElements')
tmp['method']['Document.createElement'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Document.createElement')
tmp['method']['Element.attachShadow'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Element.attachShadow')
tmp['method']['Node.getRootNode'] = typeof CustomElementRegistry !== 'undefined' && typeof CustomElementRegistry.prototype !== 'undefined' && CustomElementRegistry.prototype.hasOwnProperty('Node.getRootNode')
result['CustomElementRegistry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['detail'] = typeof CustomEvent !== 'undefined' && typeof CustomEvent.prototype !== 'undefined' && CustomEvent.prototype.hasOwnProperty('detail')
tmp['method']['initCustomEvent'] = typeof CustomEvent !== 'undefined' && typeof CustomEvent.prototype !== 'undefined' && CustomEvent.prototype.hasOwnProperty('initCustomEvent')
result['CustomEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMConfiguration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMError'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['code'] = typeof DOMException !== 'undefined' && typeof DOMException.prototype !== 'undefined' && DOMException.prototype.hasOwnProperty('code')
tmp['property']['message'] = typeof DOMException !== 'undefined' && typeof DOMException.prototype !== 'undefined' && DOMException.prototype.hasOwnProperty('message')
tmp['property']['name'] = typeof DOMException !== 'undefined' && typeof DOMException.prototype !== 'undefined' && DOMException.prototype.hasOwnProperty('name')
result['DOMException'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMHighResTimeStamp'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['createDocument'] = typeof DOMImplementation !== 'undefined' && typeof DOMImplementation.prototype !== 'undefined' && DOMImplementation.prototype.hasOwnProperty('createDocument')
tmp['method']['createDocumentType'] = typeof DOMImplementation !== 'undefined' && typeof DOMImplementation.prototype !== 'undefined' && DOMImplementation.prototype.hasOwnProperty('createDocumentType')
tmp['method']['createHTMLDocument'] = typeof DOMImplementation !== 'undefined' && typeof DOMImplementation.prototype !== 'undefined' && DOMImplementation.prototype.hasOwnProperty('createHTMLDocument')
tmp['method']['hasFeature'] = typeof DOMImplementation !== 'undefined' && typeof DOMImplementation.prototype !== 'undefined' && DOMImplementation.prototype.hasOwnProperty('hasFeature')
result['DOMImplementation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMImplementationList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMImplementationRegistry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMImplementationSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMLocator'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMMatrix'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMMatrixReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMObject'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMParser'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMPoint'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['w'] = typeof DOMPointReadOnly !== 'undefined' && typeof DOMPointReadOnly.prototype !== 'undefined' && DOMPointReadOnly.prototype.hasOwnProperty('w')
tmp['property']['x'] = typeof DOMPointReadOnly !== 'undefined' && typeof DOMPointReadOnly.prototype !== 'undefined' && DOMPointReadOnly.prototype.hasOwnProperty('x')
tmp['property']['y'] = typeof DOMPointReadOnly !== 'undefined' && typeof DOMPointReadOnly.prototype !== 'undefined' && DOMPointReadOnly.prototype.hasOwnProperty('y')
tmp['property']['z'] = typeof DOMPointReadOnly !== 'undefined' && typeof DOMPointReadOnly.prototype !== 'undefined' && DOMPointReadOnly.prototype.hasOwnProperty('z')
result['DOMPointReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMQuad'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMRect'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['bottom'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('bottom')
tmp['property']['height'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('height')
tmp['property']['left'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('left')
tmp['property']['right'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('right')
tmp['property']['top'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('top')
tmp['property']['width'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('width')
tmp['property']['x'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('x')
tmp['property']['y'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('y')
tmp['method']['fromRect'] = typeof DOMRectReadOnly !== 'undefined' && typeof DOMRectReadOnly.prototype !== 'undefined' && DOMRectReadOnly.prototype.hasOwnProperty('fromRect')
result['DOMRectReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMStringList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMStringMap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMTimeStamp'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('length')
tmp['method']['add'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('add')
tmp['method']['contains'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('contains')
tmp['method']['entries'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('entries')
tmp['method']['forEach'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('forEach')
tmp['method']['item'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('item')
tmp['method']['keys'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('keys')
tmp['method']['remove'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('remove')
tmp['method']['replace'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('replace')
tmp['method']['supports'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('supports')
tmp['method']['toggle'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('toggle')
tmp['method']['value'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('value')
tmp['method']['values'] = typeof DOMTokenList !== 'undefined' && typeof DOMTokenList.prototype !== 'undefined' && DOMTokenList.prototype.hasOwnProperty('values')
result['DOMTokenList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DOMUserData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dropEffect'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('dropEffect')
tmp['property']['effectAllowed'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('effectAllowed')
tmp['property']['files'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('files')
tmp['property']['items'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('items')
tmp['property']['mozCursor'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozCursor')
tmp['property']['mozItemCount'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozItemCount')
tmp['property']['mozSourceNode'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozSourceNode')
tmp['property']['mozUserCancelled'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozUserCancelled')
tmp['property']['types'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('types')
tmp['method']['addElement'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('addElement')
tmp['method']['clearData'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('clearData')
tmp['method']['getData'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('getData')
tmp['method']['mozClearDataAt'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozClearDataAt')
tmp['method']['mozGetDataAt'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozGetDataAt')
tmp['method']['mozSetDataAt'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozSetDataAt')
tmp['method']['mozTypesAt'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('mozTypesAt')
tmp['method']['setData'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('setData')
tmp['method']['setDragImage'] = typeof DataTransfer !== 'undefined' && typeof DataTransfer.prototype !== 'undefined' && DataTransfer.prototype.hasOwnProperty('setDragImage')
result['DataTransfer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['kind'] = typeof DataTransferItem !== 'undefined' && typeof DataTransferItem.prototype !== 'undefined' && DataTransferItem.prototype.hasOwnProperty('kind')
tmp['property']['type'] = typeof DataTransferItem !== 'undefined' && typeof DataTransferItem.prototype !== 'undefined' && DataTransferItem.prototype.hasOwnProperty('type')
tmp['method']['getAsFile'] = typeof DataTransferItem !== 'undefined' && typeof DataTransferItem.prototype !== 'undefined' && DataTransferItem.prototype.hasOwnProperty('getAsFile')
tmp['method']['getAsString'] = typeof DataTransferItem !== 'undefined' && typeof DataTransferItem.prototype !== 'undefined' && DataTransferItem.prototype.hasOwnProperty('getAsString')
tmp['method']['webkitGetAsEntry'] = typeof DataTransferItem !== 'undefined' && typeof DataTransferItem.prototype !== 'undefined' && DataTransferItem.prototype.hasOwnProperty('webkitGetAsEntry')
result['DataTransferItem'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof DataTransferItemList !== 'undefined' && typeof DataTransferItemList.prototype !== 'undefined' && DataTransferItemList.prototype.hasOwnProperty('length')
tmp['method']['add'] = typeof DataTransferItemList !== 'undefined' && typeof DataTransferItemList.prototype !== 'undefined' && DataTransferItemList.prototype.hasOwnProperty('add')
tmp['method']['clear'] = typeof DataTransferItemList !== 'undefined' && typeof DataTransferItemList.prototype !== 'undefined' && DataTransferItemList.prototype.hasOwnProperty('clear')
tmp['method']['DataTransferItem'] = typeof DataTransferItemList !== 'undefined' && typeof DataTransferItemList.prototype !== 'undefined' && DataTransferItemList.prototype.hasOwnProperty('DataTransferItem')
tmp['method']['remove'] = typeof DataTransferItemList !== 'undefined' && typeof DataTransferItemList.prototype !== 'undefined' && DataTransferItemList.prototype.hasOwnProperty('remove')
result['DataTransferItemList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof DedicatedWorkerGlobalScope !== 'undefined' && typeof DedicatedWorkerGlobalScope.prototype !== 'undefined' && DedicatedWorkerGlobalScope.prototype.hasOwnProperty('name')
tmp['property']['onmessage'] = typeof DedicatedWorkerGlobalScope !== 'undefined' && typeof DedicatedWorkerGlobalScope.prototype !== 'undefined' && DedicatedWorkerGlobalScope.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof DedicatedWorkerGlobalScope !== 'undefined' && typeof DedicatedWorkerGlobalScope.prototype !== 'undefined' && DedicatedWorkerGlobalScope.prototype.hasOwnProperty('onmessageerror')
tmp['method']['close'] = typeof DedicatedWorkerGlobalScope !== 'undefined' && typeof DedicatedWorkerGlobalScope.prototype !== 'undefined' && DedicatedWorkerGlobalScope.prototype.hasOwnProperty('close')
tmp['method']['postMessage'] = typeof DedicatedWorkerGlobalScope !== 'undefined' && typeof DedicatedWorkerGlobalScope.prototype !== 'undefined' && DedicatedWorkerGlobalScope.prototype.hasOwnProperty('postMessage')
result['DedicatedWorkerGlobalScope'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['delayTime'] = typeof DelayNode !== 'undefined' && typeof DelayNode.prototype !== 'undefined' && DelayNode.prototype.hasOwnProperty('delayTime')
result['DelayNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['x'] = typeof DeviceAcceleration !== 'undefined' && typeof DeviceAcceleration.prototype !== 'undefined' && DeviceAcceleration.prototype.hasOwnProperty('x')
tmp['property']['y'] = typeof DeviceAcceleration !== 'undefined' && typeof DeviceAcceleration.prototype !== 'undefined' && DeviceAcceleration.prototype.hasOwnProperty('y')
tmp['property']['z'] = typeof DeviceAcceleration !== 'undefined' && typeof DeviceAcceleration.prototype !== 'undefined' && DeviceAcceleration.prototype.hasOwnProperty('z')
result['DeviceAcceleration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['value'] = typeof DeviceLightEvent !== 'undefined' && typeof DeviceLightEvent.prototype !== 'undefined' && DeviceLightEvent.prototype.hasOwnProperty('value')
result['DeviceLightEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['acceleration'] = typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.prototype !== 'undefined' && DeviceMotionEvent.prototype.hasOwnProperty('acceleration')
tmp['property']['accelerationIncludingGravity'] = typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.prototype !== 'undefined' && DeviceMotionEvent.prototype.hasOwnProperty('accelerationIncludingGravity')
tmp['property']['interval'] = typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.prototype !== 'undefined' && DeviceMotionEvent.prototype.hasOwnProperty('interval')
tmp['property']['rotationRate'] = typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.prototype !== 'undefined' && DeviceMotionEvent.prototype.hasOwnProperty('rotationRate')
result['DeviceMotionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['absolute'] = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.prototype !== 'undefined' && DeviceOrientationEvent.prototype.hasOwnProperty('absolute')
tmp['property']['alpha'] = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.prototype !== 'undefined' && DeviceOrientationEvent.prototype.hasOwnProperty('alpha')
tmp['property']['beta'] = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.prototype !== 'undefined' && DeviceOrientationEvent.prototype.hasOwnProperty('beta')
tmp['property']['gamma'] = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.prototype !== 'undefined' && DeviceOrientationEvent.prototype.hasOwnProperty('gamma')
result['DeviceOrientationEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['max'] = typeof DeviceProximityEvent !== 'undefined' && typeof DeviceProximityEvent.prototype !== 'undefined' && DeviceProximityEvent.prototype.hasOwnProperty('max')
tmp['property']['min'] = typeof DeviceProximityEvent !== 'undefined' && typeof DeviceProximityEvent.prototype !== 'undefined' && DeviceProximityEvent.prototype.hasOwnProperty('min')
tmp['property']['value'] = typeof DeviceProximityEvent !== 'undefined' && typeof DeviceProximityEvent.prototype !== 'undefined' && DeviceProximityEvent.prototype.hasOwnProperty('value')
result['DeviceProximityEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['alpha'] = typeof DeviceRotationRate !== 'undefined' && typeof DeviceRotationRate.prototype !== 'undefined' && DeviceRotationRate.prototype.hasOwnProperty('alpha')
tmp['property']['beta'] = typeof DeviceRotationRate !== 'undefined' && typeof DeviceRotationRate.prototype !== 'undefined' && DeviceRotationRate.prototype.hasOwnProperty('beta')
tmp['property']['gamma'] = typeof DeviceRotationRate !== 'undefined' && typeof DeviceRotationRate.prototype !== 'undefined' && DeviceRotationRate.prototype.hasOwnProperty('gamma')
result['DeviceRotationRate'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DirectoryEntrySync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DirectoryReaderSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['alinkColor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('alinkColor')
tmp['property']['anchors'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('anchors')
tmp['property']['applets'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('applets')
tmp['property']['async'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('async')
tmp['property']['bgColor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('bgColor')
tmp['property']['body'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('body')
tmp['property']['characterSet'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('characterSet')
tmp['property']['childElementCount'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('childElementCount')
tmp['property']['children'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('children')
tmp['property']['compatMode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('compatMode')
tmp['property']['contentType'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('contentType')
tmp['property']['currentScript'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('currentScript')
tmp['property']['defaultView'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('defaultView')
tmp['property']['designMode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('designMode')
tmp['property']['dir'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('dir')
tmp['property']['doctype'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('doctype')
tmp['property']['documentElement'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('documentElement')
tmp['property']['documentURI'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('documentURI')
tmp['property']['documentURIObject'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('documentURIObject')
tmp['property']['domain'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('domain')
tmp['property']['domConfig'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('domConfig')
tmp['property']['embeds'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('embeds')
tmp['property']['fgColor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('fgColor')
tmp['property']['firstElementChild'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('firstElementChild')
tmp['property']['forms'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('forms')
tmp['property']['fullscreen'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('fullscreen')
tmp['property']['fullscreenEnabled'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('fullscreenEnabled')
tmp['property']['head'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('head')
tmp['property']['height'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('height')
tmp['property']['hidden'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('hidden')
tmp['property']['images'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('images')
tmp['property']['implementation'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('implementation')
tmp['property']['lastElementChild'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('lastElementChild')
tmp['property']['lastModified'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('lastModified')
tmp['property']['lastStyleSheetSet'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('lastStyleSheetSet')
tmp['property']['linkColor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('linkColor')
tmp['property']['links'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('links')
tmp['property']['location'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('location')
tmp['property']['mozSyntheticDocument'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('mozSyntheticDocument')
tmp['property']['onabort'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onabort')
tmp['property']['onafterscriptexecute'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onafterscriptexecute')
tmp['property']['onanimationcancel'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onanimationcancel')
tmp['property']['onanimationend'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onanimationend')
tmp['property']['onanimationiteration'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onanimationiteration')
tmp['property']['onauxclick'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onauxclick')
tmp['property']['onbeforescriptexecute'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onbeforescriptexecute')
tmp['property']['onblur'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onblur')
tmp['property']['onchange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onchange')
tmp['property']['onclick'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onclose')
tmp['property']['oncontextmenu'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('oncontextmenu')
tmp['property']['ondblclick'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ondblclick')
tmp['property']['onerror'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onerror')
tmp['property']['onfocus'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onfocus')
tmp['property']['onfullscreenchange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onfullscreenchange')
tmp['property']['onfullscreenerror'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onfullscreenerror')
tmp['property']['ongotpointercapture'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['oninput'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('oninput')
tmp['property']['onkeydown'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onkeydown')
tmp['property']['onkeypress'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onkeypress')
tmp['property']['onkeyup'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onkeyup')
tmp['property']['onload'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onload')
tmp['property']['onloadend'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onloadend')
tmp['property']['onloadstart'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onloadstart')
tmp['property']['onlostpointercapture'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['onmousedown'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onmousedown')
tmp['property']['onmousemove'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onmousemove')
tmp['property']['onmouseout'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onmouseout')
tmp['property']['onmouseover'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onmouseover')
tmp['property']['onmouseup'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onmouseup')
tmp['property']['onoffline'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onoffline')
tmp['property']['ononline'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ononline')
tmp['property']['onpointercancel'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointercancel')
tmp['property']['onpointerdown'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerdown')
tmp['property']['onpointerenter'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerenter')
tmp['property']['onpointerleave'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerleave')
tmp['property']['onpointermove'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointermove')
tmp['property']['onpointerout'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerout')
tmp['property']['onpointerover'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerover')
tmp['property']['onpointerup'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onpointerup')
tmp['property']['onreset'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onreset')
tmp['property']['onresize'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onresize')
tmp['property']['onscroll'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onscroll')
tmp['property']['onselect'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onselect')
tmp['property']['onselectionchange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectionchange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectstart'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onselectstart')
tmp['property']['onsubmit'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onsubmit')
tmp['property']['ontouchcancel'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ontouchcancel')
tmp['property']['ontouchmove'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ontouchmove')
tmp['property']['ontouchstart'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ontouchstart')
tmp['property']['ontransitioncancel'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ontransitioncancel')
tmp['property']['ontransitionend'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('ontransitionend')
tmp['property']['onvisibilitychange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onvisibilitychange')
tmp['property']['onwheel'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('onwheel')
tmp['property']['origin'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('origin')
tmp['property']['plugins'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('plugins')
tmp['property']['popupNode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('popupNode')
tmp['property']['preferredStyleSheetSet'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('preferredStyleSheetSet')
tmp['property']['readyState'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('readyState')
tmp['property']['referrer'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('referrer')
tmp['property']['scripts'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('scripts')
tmp['property']['scrollingElement'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('scrollingElement')
tmp['property']['selectedStyleSheetSet'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('selectedStyleSheetSet')
tmp['property']['styleSheetSets'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('styleSheetSets')
tmp['property']['timeline'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('timeline')
tmp['property']['title'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('title')
tmp['property']['tooltipNode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('tooltipNode')
tmp['property']['URL'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('URL')
tmp['property']['visibilityState'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('visibilityState')
tmp['property']['vlinkColor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('vlinkColor')
tmp['property']['width'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('width')
tmp['property']['xmlEncoding'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('xmlEncoding')
tmp['property']['xmlVersion'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('xmlVersion')
tmp['method']['adoptNode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('adoptNode')
tmp['method']['append'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('append')
tmp['method']['caretRangeFromPoint'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('caretRangeFromPoint')
tmp['method']['clear'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('clear')
tmp['method']['close'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('close')
tmp['method']['createAttribute'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createAttribute')
tmp['method']['createCDATASection'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createCDATASection')
tmp['method']['createComment'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createComment')
tmp['method']['createDocumentFragment'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createDocumentFragment')
tmp['method']['createElement'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createElement')
tmp['method']['createElementNS'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createElementNS')
tmp['method']['createEntityReference'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createEntityReference')
tmp['method']['createEvent'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createEvent')
tmp['method']['createExpression'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createExpression')
tmp['method']['createNodeIterator'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createNodeIterator')
tmp['method']['createNSResolver'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createNSResolver')
tmp['method']['createProcessingInstruction'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createProcessingInstruction')
tmp['method']['createRange'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createRange')
tmp['method']['createTextNode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createTextNode')
tmp['method']['createTouch'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createTouch')
tmp['method']['createTouchList'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createTouchList')
tmp['method']['createTreeWalker'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('createTreeWalker')
tmp['method']['enableStyleSheetsForSet'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('enableStyleSheetsForSet')
tmp['method']['evaluate'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('evaluate')
tmp['method']['execCommand'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('execCommand')
tmp['method']['exitFullscreen'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('exitFullscreen')
tmp['method']['exitPointerLock'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('exitPointerLock')
tmp['method']['getAnimations'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getAnimations')
tmp['method']['getBoxObjectFor'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getBoxObjectFor')
tmp['method']['getElementById'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getElementById')
tmp['method']['getElementsByClassName'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getElementsByClassName')
tmp['method']['getElementsByName'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getElementsByName')
tmp['method']['getElementsByTagName'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getElementsByTagName')
tmp['method']['getElementsByTagNameNS'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('getElementsByTagNameNS')
tmp['method']['hasFocus'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('hasFocus')
tmp['method']['importNode'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('importNode')
tmp['method']['loadOverlay'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('loadOverlay')
tmp['method']['mozSetImageElement'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('mozSetImageElement')
tmp['method']['open'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('open')
tmp['method']['prepend'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('prepend')
tmp['method']['queryCommandEnabled'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('queryCommandEnabled')
tmp['method']['queryCommandSupported'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('queryCommandSupported')
tmp['method']['querySelector'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('querySelector')
tmp['method']['querySelectorAll'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('querySelectorAll')
tmp['method']['querySelectorAll'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('querySelectorAll')
tmp['method']['registerElement'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('registerElement')
tmp['method']['releaseCapture'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('releaseCapture')
tmp['method']['write'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('write')
tmp['method']['writeln'] = typeof Document !== 'undefined' && typeof Document.prototype !== 'undefined' && Document.prototype.hasOwnProperty('writeln')
result['Document'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['childElementCount'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('childElementCount')
tmp['property']['children'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('children')
tmp['property']['firstElementChild'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('firstElementChild')
tmp['property']['lastElementChild'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('lastElementChild')
tmp['method']['append'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('append')
tmp['method']['prepend'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('prepend')
tmp['method']['querySelector'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('querySelector')
tmp['method']['querySelectorAll'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('querySelectorAll')
tmp['method']['querySelectorAll'] = typeof DocumentFragment !== 'undefined' && typeof DocumentFragment.prototype !== 'undefined' && DocumentFragment.prototype.hasOwnProperty('querySelectorAll')
result['DocumentFragment'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['Element.shadowRoot'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Element.shadowRoot')
tmp['property']['Element.slot'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Element.slot')
tmp['property']['Event.composed'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Event.composed')
tmp['property']['Event.composedPath'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Event.composedPath')
tmp['property']['Node.isConnected'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Node.isConnected')
tmp['property']['Window.customElements'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Window.customElements')
tmp['method']['Document.createElement'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Document.createElement')
tmp['method']['Element.attachShadow'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Element.attachShadow')
tmp['method']['Node.getRootNode'] = typeof DocumentOrShadowRoot !== 'undefined' && typeof DocumentOrShadowRoot.prototype !== 'undefined' && DocumentOrShadowRoot.prototype.hasOwnProperty('Node.getRootNode')
result['DocumentOrShadowRoot'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DocumentTimeline'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DocumentTouch'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['after'] = typeof DocumentType !== 'undefined' && typeof DocumentType.prototype !== 'undefined' && DocumentType.prototype.hasOwnProperty('after')
tmp['method']['before'] = typeof DocumentType !== 'undefined' && typeof DocumentType.prototype !== 'undefined' && DocumentType.prototype.hasOwnProperty('before')
tmp['method']['remove'] = typeof DocumentType !== 'undefined' && typeof DocumentType.prototype !== 'undefined' && DocumentType.prototype.hasOwnProperty('remove')
tmp['method']['replaceWith'] = typeof DocumentType !== 'undefined' && typeof DocumentType.prototype !== 'undefined' && DocumentType.prototype.hasOwnProperty('replaceWith')
result['DocumentType'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['DoubleRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dataTransfer'] = typeof DragEvent !== 'undefined' && typeof DragEvent.prototype !== 'undefined' && DragEvent.prototype.hasOwnProperty('dataTransfer')
result['DragEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['attack'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('attack')
tmp['property']['knee'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('knee')
tmp['property']['ratio'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('ratio')
tmp['property']['reduction'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('reduction')
tmp['property']['release'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('release')
tmp['property']['threshold'] = typeof DynamicsCompressorNode !== 'undefined' && typeof DynamicsCompressorNode.prototype !== 'undefined' && DynamicsCompressorNode.prototype.hasOwnProperty('threshold')
result['DynamicsCompressorNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_blend_minmax'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_color_buffer_float'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_color_buffer_half_float'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['beginQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('beginQueryEXT')
tmp['method']['createQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('createQueryEXT')
tmp['method']['deleteQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('deleteQueryEXT')
tmp['method']['endQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('endQueryEXT')
tmp['method']['getQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('getQueryEXT')
tmp['method']['getQueryObjectEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('getQueryObjectEXT')
tmp['method']['isQueryEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('isQueryEXT')
tmp['method']['queryCounterEXT'] = typeof EXT_disjoint_timer_query !== 'undefined' && typeof EXT_disjoint_timer_query.prototype !== 'undefined' && EXT_disjoint_timer_query.prototype.hasOwnProperty('queryCounterEXT')
result['EXT_disjoint_timer_query'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_frag_depth'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_sRGB'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_shader_texture_lod'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EXT_texture_filter_anisotropic'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['accessKey'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('accessKey')
tmp['property']['attributes'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('attributes')
tmp['property']['childElementCount'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('childElementCount')
tmp['property']['children'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('children')
tmp['property']['classList'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('classList')
tmp['property']['className'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('className')
tmp['property']['clientHeight'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('clientHeight')
tmp['property']['clientLeft'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('clientLeft')
tmp['property']['clientTop'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('clientTop')
tmp['property']['clientWidth'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('clientWidth')
tmp['property']['currentStyle'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('currentStyle')
tmp['property']['firstElementChild'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('firstElementChild')
tmp['property']['id'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('id')
tmp['property']['innerHTML'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('innerHTML')
tmp['property']['lastElementChild'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('lastElementChild')
tmp['property']['localName'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('localName')
tmp['property']['name'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('name')
tmp['property']['namespaceURI'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('namespaceURI')
tmp['property']['nextElementSibling'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('nextElementSibling')
tmp['property']['ongotpointercapture'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['onlostpointercapture'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['outerHTML'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('outerHTML')
tmp['property']['prefix'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('prefix')
tmp['property']['previousElementSibling'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('previousElementSibling')
tmp['property']['runtimeStyle'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('runtimeStyle')
tmp['property']['scrollHeight'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollHeight')
tmp['property']['scrollLeft'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollLeft')
tmp['property']['scrollLeftMax'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollLeftMax')
tmp['property']['scrollTop'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollTop')
tmp['property']['scrollTopMax'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollTopMax')
tmp['property']['scrollWidth'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollWidth')
tmp['property']['shadowRoot'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('shadowRoot')
tmp['property']['slot'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('slot')
tmp['property']['tabStop'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('tabStop')
tmp['property']['tagName'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('tagName')
tmp['method']['after'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('after')
tmp['method']['animate'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('animate')
tmp['method']['append'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('append')
tmp['method']['attachShadow'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('attachShadow')
tmp['method']['before'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('before')
tmp['method']['closest'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('closest')
tmp['method']['getAttribute'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getAttribute')
tmp['method']['getAttributeNames'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getAttributeNames')
tmp['method']['getAttributeNode'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getAttributeNode')
tmp['method']['getAttributeNodeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getAttributeNodeNS')
tmp['method']['getAttributeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getAttributeNS')
tmp['method']['getBoundingClientRect'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getBoundingClientRect')
tmp['method']['getClientRects'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getClientRects')
tmp['method']['getElementsByClassName'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getElementsByClassName')
tmp['method']['getElementsByTagName'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getElementsByTagName')
tmp['method']['getElementsByTagNameNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('getElementsByTagNameNS')
tmp['method']['hasAttribute'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('hasAttribute')
tmp['method']['hasAttributeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('hasAttributeNS')
tmp['method']['hasAttributes'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('hasAttributes')
tmp['method']['insertAdjacentElement'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('insertAdjacentElement')
tmp['method']['insertAdjacentHTML'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('insertAdjacentHTML')
tmp['method']['insertAdjacentText'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('insertAdjacentText')
tmp['method']['matches'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('matches')
tmp['method']['prepend'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('prepend')
tmp['method']['querySelector'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('querySelector')
tmp['method']['querySelectorAll'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('querySelectorAll')
tmp['method']['querySelectorAll'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('querySelectorAll')
tmp['method']['releasePointerCapture'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('releasePointerCapture')
tmp['method']['remove'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('remove')
tmp['method']['removeAttribute'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('removeAttribute')
tmp['method']['removeAttributeNode'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('removeAttributeNode')
tmp['method']['removeAttributeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('removeAttributeNS')
tmp['method']['replaceWith'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('replaceWith')
tmp['method']['requestFullscreen'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('requestFullscreen')
tmp['method']['requestPointerLock'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('requestPointerLock')
tmp['method']['scrollIntoView'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollIntoView')
tmp['method']['scrollIntoViewIfNeeded'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('scrollIntoViewIfNeeded')
tmp['method']['setAttribute'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setAttribute')
tmp['method']['setAttributeNode'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setAttributeNode')
tmp['method']['setAttributeNodeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setAttributeNodeNS')
tmp['method']['setAttributeNS'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setAttributeNS')
tmp['method']['setCapture'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setCapture')
tmp['method']['setPointerCapture'] = typeof Element !== 'undefined' && typeof Element.prototype !== 'undefined' && Element.prototype.hasOwnProperty('setPointerCapture')
result['Element'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ElementTraversal'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Entity'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EntityReference'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['EntrySync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ErrorEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['bubbles'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('bubbles')
tmp['property']['cancelable'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('cancelable')
tmp['property']['cancelBubble'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('cancelBubble')
tmp['property']['composed'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('composed')
tmp['property']['currentTarget'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('currentTarget')
tmp['property']['defaultPrevented'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('defaultPrevented')
tmp['property']['eventPhase'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('eventPhase')
tmp['property']['explicitOriginalTarget'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('explicitOriginalTarget')
tmp['property']['isTrusted'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('isTrusted')
tmp['property']['originalTarget'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('originalTarget')
tmp['property']['returnValue'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('returnValue')
tmp['property']['srcElement'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('srcElement')
tmp['property']['target'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('target')
tmp['property']['timeStamp'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('timeStamp')
tmp['property']['type'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('type')
tmp['method']['composedPath'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('composedPath')
tmp['method']['createEvent'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('createEvent')
tmp['method']['initEvent'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('initEvent')
tmp['method']['preventDefault'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('preventDefault')
tmp['method']['stopImmediatePropagation'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('stopImmediatePropagation')
tmp['method']['stopPropagation'] = typeof Event !== 'undefined' && typeof Event.prototype !== 'undefined' && Event.prototype.hasOwnProperty('stopPropagation')
result['Event'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['handleEvent'] = typeof EventListener !== 'undefined' && typeof EventListener.prototype !== 'undefined' && EventListener.prototype.hasOwnProperty('handleEvent')
result['EventListener'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('onerror')
tmp['property']['onmessage'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('onmessage')
tmp['property']['onopen'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('onopen')
tmp['property']['readyState'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('readyState')
tmp['property']['url'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('url')
tmp['property']['withCredentials'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('withCredentials')
tmp['method']['close'] = typeof EventSource !== 'undefined' && typeof EventSource.prototype !== 'undefined' && EventSource.prototype.hasOwnProperty('close')
result['EventSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['addEventListener'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('addEventListener')
tmp['method']['attachEvent'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('attachEvent')
tmp['method']['detachEvent'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('detachEvent')
tmp['method']['dispatchEvent'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('dispatchEvent')
tmp['method']['fireEvent'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('fireEvent')
tmp['method']['removeEventListener'] = typeof EventTarget !== 'undefined' && typeof EventTarget.prototype !== 'undefined' && EventTarget.prototype.hasOwnProperty('removeEventListener')
result['EventTarget'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['waitUntil'] = typeof ExtendableEvent !== 'undefined' && typeof ExtendableEvent.prototype !== 'undefined' && ExtendableEvent.prototype.hasOwnProperty('waitUntil')
result['ExtendableEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof ExtendableMessageEvent !== 'undefined' && typeof ExtendableMessageEvent.prototype !== 'undefined' && ExtendableMessageEvent.prototype.hasOwnProperty('data')
tmp['property']['lastEventId'] = typeof ExtendableMessageEvent !== 'undefined' && typeof ExtendableMessageEvent.prototype !== 'undefined' && ExtendableMessageEvent.prototype.hasOwnProperty('lastEventId')
tmp['property']['origin'] = typeof ExtendableMessageEvent !== 'undefined' && typeof ExtendableMessageEvent.prototype !== 'undefined' && ExtendableMessageEvent.prototype.hasOwnProperty('origin')
tmp['property']['ports'] = typeof ExtendableMessageEvent !== 'undefined' && typeof ExtendableMessageEvent.prototype !== 'undefined' && ExtendableMessageEvent.prototype.hasOwnProperty('ports')
tmp['property']['source'] = typeof ExtendableMessageEvent !== 'undefined' && typeof ExtendableMessageEvent.prototype !== 'undefined' && ExtendableMessageEvent.prototype.hasOwnProperty('source')
result['ExtendableMessageEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['provider'] = typeof FederatedCredential !== 'undefined' && typeof FederatedCredential.prototype !== 'undefined' && FederatedCredential.prototype.hasOwnProperty('provider')
result['FederatedCredential'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['client'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('client')
tmp['property']['clientId'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('clientId')
tmp['property']['isReload'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('isReload')
tmp['property']['navigationPreload'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('navigationPreload')
tmp['property']['request'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('request')
tmp['method']['respondWith'] = typeof FetchEvent !== 'undefined' && typeof FetchEvent.prototype !== 'undefined' && FetchEvent.prototype.hasOwnProperty('respondWith')
result['FetchEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FetchEvent_clone'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['fileName'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('fileName')
tmp['property']['fileSize'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('fileSize')
tmp['property']['lastModified'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('lastModified')
tmp['property']['lastModifiedDate'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('lastModifiedDate')
tmp['property']['mozFullPath'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('mozFullPath')
tmp['property']['name'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('name')
tmp['property']['type'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('type')
tmp['property']['webkitRelativePath'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('webkitRelativePath')
tmp['method']['getAsBinary'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('getAsBinary')
tmp['method']['getAsDataURL'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('getAsDataURL')
tmp['method']['getAsText'] = typeof File !== 'undefined' && typeof File.prototype !== 'undefined' && File.prototype.hasOwnProperty('getAsText')
result['File'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileEntrySync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileError'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileException'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['error'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('error')
tmp['property']['onload'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('onload')
tmp['property']['readyState'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('readyState')
tmp['property']['result'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('result')
tmp['method']['abort'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('abort')
tmp['method']['readAsArrayBuffer'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('readAsArrayBuffer')
tmp['method']['readAsBinaryString'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('readAsBinaryString')
tmp['method']['readAsDataURL'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('readAsDataURL')
tmp['method']['readAsText'] = typeof FileReader !== 'undefined' && typeof FileReader.prototype !== 'undefined' && FileReader.prototype.hasOwnProperty('readAsText')
result['FileReader'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileReaderSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['lockedFile'] = typeof FileRequest !== 'undefined' && typeof FileRequest.prototype !== 'undefined' && FileRequest.prototype.hasOwnProperty('lockedFile')
tmp['property']['onprogress'] = typeof FileRequest !== 'undefined' && typeof FileRequest.prototype !== 'undefined' && FileRequest.prototype.hasOwnProperty('onprogress')
result['FileRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof FileSystem !== 'undefined' && typeof FileSystem.prototype !== 'undefined' && FileSystem.prototype.hasOwnProperty('name')
tmp['property']['root'] = typeof FileSystem !== 'undefined' && typeof FileSystem.prototype !== 'undefined' && FileSystem.prototype.hasOwnProperty('root')
result['FileSystem'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['createReader'] = typeof FileSystemDirectoryEntry !== 'undefined' && typeof FileSystemDirectoryEntry.prototype !== 'undefined' && FileSystemDirectoryEntry.prototype.hasOwnProperty('createReader')
tmp['method']['getDirectory'] = typeof FileSystemDirectoryEntry !== 'undefined' && typeof FileSystemDirectoryEntry.prototype !== 'undefined' && FileSystemDirectoryEntry.prototype.hasOwnProperty('getDirectory')
tmp['method']['getFile'] = typeof FileSystemDirectoryEntry !== 'undefined' && typeof FileSystemDirectoryEntry.prototype !== 'undefined' && FileSystemDirectoryEntry.prototype.hasOwnProperty('getFile')
tmp['method']['removeRecursively'] = typeof FileSystemDirectoryEntry !== 'undefined' && typeof FileSystemDirectoryEntry.prototype !== 'undefined' && FileSystemDirectoryEntry.prototype.hasOwnProperty('removeRecursively')
result['FileSystemDirectoryEntry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['readEntries'] = typeof FileSystemDirectoryReader !== 'undefined' && typeof FileSystemDirectoryReader.prototype !== 'undefined' && FileSystemDirectoryReader.prototype.hasOwnProperty('readEntries')
result['FileSystemDirectoryReader'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['filesystem'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('filesystem')
tmp['property']['fullPath'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('fullPath')
tmp['property']['isDirectory'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('isDirectory')
tmp['property']['isFile'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('isFile')
tmp['property']['name'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('name')
tmp['method']['copyTo'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('copyTo')
tmp['method']['getMetadata'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('getMetadata')
tmp['method']['getParent'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('getParent')
tmp['method']['moveTo'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('moveTo')
tmp['method']['remove'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('remove')
tmp['method']['toURL'] = typeof FileSystemEntry !== 'undefined' && typeof FileSystemEntry.prototype !== 'undefined' && FileSystemEntry.prototype.hasOwnProperty('toURL')
result['FileSystemEntry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['createWriter'] = typeof FileSystemFileEntry !== 'undefined' && typeof FileSystemFileEntry.prototype !== 'undefined' && FileSystemFileEntry.prototype.hasOwnProperty('createWriter')
tmp['method']['file'] = typeof FileSystemFileEntry !== 'undefined' && typeof FileSystemFileEntry.prototype !== 'undefined' && FileSystemFileEntry.prototype.hasOwnProperty('file')
result['FileSystemFileEntry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['create'] = typeof FileSystemFlags !== 'undefined' && typeof FileSystemFlags.prototype !== 'undefined' && FileSystemFlags.prototype.hasOwnProperty('create')
tmp['property']['exclusive'] = typeof FileSystemFlags !== 'undefined' && typeof FileSystemFlags.prototype !== 'undefined' && FileSystemFlags.prototype.hasOwnProperty('exclusive')
result['FileSystemFlags'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['FileSystemSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['relatedTarget'] = typeof FocusEvent !== 'undefined' && typeof FocusEvent.prototype !== 'undefined' && FocusEvent.prototype.hasOwnProperty('relatedTarget')
result['FocusEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['display'] = typeof FontFace !== 'undefined' && typeof FontFace.prototype !== 'undefined' && FontFace.prototype.hasOwnProperty('display')
result['FontFace'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['ready'] = typeof FontFaceSet !== 'undefined' && typeof FontFaceSet.prototype !== 'undefined' && FontFaceSet.prototype.hasOwnProperty('ready')
tmp['method']['check'] = typeof FontFaceSet !== 'undefined' && typeof FontFaceSet.prototype !== 'undefined' && FontFaceSet.prototype.hasOwnProperty('check')
tmp['method']['load'] = typeof FontFaceSet !== 'undefined' && typeof FontFaceSet.prototype !== 'undefined' && FontFaceSet.prototype.hasOwnProperty('load')
result['FontFaceSet'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['fontfaces'] = typeof FontFaceSetLoadEvent !== 'undefined' && typeof FontFaceSetLoadEvent.prototype !== 'undefined' && FontFaceSetLoadEvent.prototype.hasOwnProperty('fontfaces')
result['FontFaceSetLoadEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['append'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('append')
tmp['method']['delete'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('delete')
tmp['method']['entries'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('entries')
tmp['method']['get'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('get')
tmp['method']['getAll'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('getAll')
tmp['method']['has'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('has')
tmp['method']['keys'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('keys')
tmp['method']['set'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('set')
tmp['method']['values'] = typeof FormData !== 'undefined' && typeof FormData.prototype !== 'undefined' && FormData.prototype.hasOwnProperty('values')
result['FormData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['gain'] = typeof GainNode !== 'undefined' && typeof GainNode.prototype !== 'undefined' && GainNode.prototype.hasOwnProperty('gain')
result['GainNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['axes'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('axes')
tmp['property']['buttons'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('buttons')
tmp['property']['connected'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('connected')
tmp['property']['displayId'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('displayId')
tmp['property']['hand'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('hand')
tmp['property']['hapticActuators'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('hapticActuators')
tmp['property']['id'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('id')
tmp['property']['index'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('index')
tmp['property']['mapping'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('mapping')
tmp['property']['pose'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('pose')
tmp['property']['timestamp'] = typeof Gamepad !== 'undefined' && typeof Gamepad.prototype !== 'undefined' && Gamepad.prototype.hasOwnProperty('timestamp')
result['Gamepad'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['pressed'] = typeof GamepadButton !== 'undefined' && typeof GamepadButton.prototype !== 'undefined' && GamepadButton.prototype.hasOwnProperty('pressed')
tmp['property']['value'] = typeof GamepadButton !== 'undefined' && typeof GamepadButton.prototype !== 'undefined' && GamepadButton.prototype.hasOwnProperty('value')
result['GamepadButton'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['gamepad'] = typeof GamepadEvent !== 'undefined' && typeof GamepadEvent.prototype !== 'undefined' && GamepadEvent.prototype.hasOwnProperty('gamepad')
result['GamepadEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['type'] = typeof GamepadHapticActuator !== 'undefined' && typeof GamepadHapticActuator.prototype !== 'undefined' && GamepadHapticActuator.prototype.hasOwnProperty('type')
tmp['method']['pulse'] = typeof GamepadHapticActuator !== 'undefined' && typeof GamepadHapticActuator.prototype !== 'undefined' && GamepadHapticActuator.prototype.hasOwnProperty('pulse')
result['GamepadHapticActuator'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['angularAcceleration'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('angularAcceleration')
tmp['property']['angularVelocity'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('angularVelocity')
tmp['property']['hasOrientation'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('hasOrientation')
tmp['property']['hasPosition'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('hasPosition')
tmp['property']['linearAcceleration'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('linearAcceleration')
tmp['property']['linearVelocity'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('linearVelocity')
tmp['property']['orientation'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('orientation')
tmp['property']['position'] = typeof GamepadPose !== 'undefined' && typeof GamepadPose.prototype !== 'undefined' && GamepadPose.prototype.hasOwnProperty('position')
result['GamepadPose'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['clearWatch'] = typeof Geolocation !== 'undefined' && typeof Geolocation.prototype !== 'undefined' && Geolocation.prototype.hasOwnProperty('clearWatch')
tmp['method']['getCurrentPosition'] = typeof Geolocation !== 'undefined' && typeof Geolocation.prototype !== 'undefined' && Geolocation.prototype.hasOwnProperty('getCurrentPosition')
tmp['method']['watchPosition'] = typeof Geolocation !== 'undefined' && typeof Geolocation.prototype !== 'undefined' && Geolocation.prototype.hasOwnProperty('watchPosition')
result['Geolocation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['GeometryUtils'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['GestureEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onabort'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onabort')
tmp['property']['onanimationcancel'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onanimationcancel')
tmp['property']['onanimationend'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onanimationend')
tmp['property']['onanimationiteration'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onanimationiteration')
tmp['property']['onauxclick'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onauxclick')
tmp['property']['onblur'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onblur')
tmp['property']['onchange'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onchange')
tmp['property']['onclick'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onclose')
tmp['property']['oncontextmenu'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('oncontextmenu')
tmp['property']['ondblclick'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ondblclick')
tmp['property']['onerror'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onerror')
tmp['property']['onfocus'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onfocus')
tmp['property']['ongotpointercapture'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['oninput'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('oninput')
tmp['property']['onkeydown'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onkeydown')
tmp['property']['onkeypress'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onkeypress')
tmp['property']['onkeyup'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onkeyup')
tmp['property']['onload'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onload')
tmp['property']['onloadend'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onloadend')
tmp['property']['onloadstart'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onloadstart')
tmp['property']['onlostpointercapture'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['onmousedown'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onmousedown')
tmp['property']['onmousemove'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onmousemove')
tmp['property']['onmouseout'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onmouseout')
tmp['property']['onmouseover'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onmouseover')
tmp['property']['onmouseup'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onmouseup')
tmp['property']['onpointercancel'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointercancel')
tmp['property']['onpointerdown'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerdown')
tmp['property']['onpointerenter'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerenter')
tmp['property']['onpointerleave'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerleave')
tmp['property']['onpointermove'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointermove')
tmp['property']['onpointerout'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerout')
tmp['property']['onpointerover'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerover')
tmp['property']['onpointerup'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onpointerup')
tmp['property']['onreset'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onreset')
tmp['property']['onresize'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onresize')
tmp['property']['onscroll'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onscroll')
tmp['property']['onselect'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onselect')
tmp['property']['onselectionchange'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectstart'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onselectstart')
tmp['property']['onsubmit'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onsubmit')
tmp['property']['ontouchcancel'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ontouchcancel')
tmp['property']['ontouchmove'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ontouchmove')
tmp['property']['ontouchstart'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ontouchstart')
tmp['property']['ontransitioncancel'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ontransitioncancel')
tmp['property']['ontransitionend'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('ontransitionend')
tmp['property']['onwheel'] = typeof GlobalEventHandlers !== 'undefined' && typeof GlobalEventHandlers.prototype !== 'undefined' && GlobalEventHandlers.prototype.hasOwnProperty('onwheel')
result['GlobalEventHandlers'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getEyeParameters'] = typeof HMDVRDevice !== 'undefined' && typeof HMDVRDevice.prototype !== 'undefined' && HMDVRDevice.prototype.hasOwnProperty('getEyeParameters')
tmp['method']['setFieldOfView'] = typeof HMDVRDevice !== 'undefined' && typeof HMDVRDevice.prototype !== 'undefined' && HMDVRDevice.prototype.hasOwnProperty('setFieldOfView')
result['HMDVRDevice'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['download'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('download')
tmp['property']['hash'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('hash')
tmp['property']['host'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('host')
tmp['property']['hostname'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('hostname')
tmp['property']['href'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('href')
tmp['property']['origin'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('origin')
tmp['property']['password'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('password')
tmp['property']['pathname'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('pathname')
tmp['property']['port'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('port')
tmp['property']['protocol'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('protocol')
tmp['property']['referrerPolicy'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('referrerPolicy')
tmp['property']['rel'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('rel')
tmp['property']['relList'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('relList')
tmp['property']['search'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('search')
tmp['property']['searchParams'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('searchParams')
tmp['property']['username'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('username')
tmp['method']['toString'] = typeof HTMLAnchorElement !== 'undefined' && typeof HTMLAnchorElement.prototype !== 'undefined' && HTMLAnchorElement.prototype.hasOwnProperty('toString')
result['HTMLAnchorElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['hash'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('hash')
tmp['property']['host'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('host')
tmp['property']['hostname'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('hostname')
tmp['property']['href'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('href')
tmp['property']['origin'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('origin')
tmp['property']['password'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('password')
tmp['property']['pathname'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('pathname')
tmp['property']['port'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('port')
tmp['property']['protocol'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('protocol')
tmp['property']['referrerPolicy'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('referrerPolicy')
tmp['property']['rel'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('rel')
tmp['property']['relList'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('relList')
tmp['property']['search'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('search')
tmp['property']['searchParams'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('searchParams')
tmp['property']['username'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('username')
tmp['method']['toString'] = typeof HTMLAreaElement !== 'undefined' && typeof HTMLAreaElement.prototype !== 'undefined' && HTMLAreaElement.prototype.hasOwnProperty('toString')
result['HTMLAreaElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLAudioElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLBRElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLBaseElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLBaseFontElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onafterprint'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onafterprint')
tmp['property']['onbeforeprint'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onbeforeprint')
tmp['property']['onbeforeunload'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onbeforeunload')
tmp['property']['onhashchange'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onhashchange')
tmp['property']['onlanguagechange'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onlanguagechange')
tmp['property']['onmessage'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onmessageerror')
tmp['property']['onpopstate'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onpopstate')
tmp['property']['onrejectionhandled'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onrejectionhandled')
tmp['property']['onstorage'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onstorage')
tmp['property']['onunhandledrejection'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onunhandledrejection')
tmp['property']['onunload'] = typeof HTMLBodyElement !== 'undefined' && typeof HTMLBodyElement.prototype !== 'undefined' && HTMLBodyElement.prototype.hasOwnProperty('onunload')
result['HTMLBodyElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLButtonElement !== 'undefined' && typeof HTMLButtonElement.prototype !== 'undefined' && HTMLButtonElement.prototype.hasOwnProperty('labels')
result['HTMLButtonElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['height'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('height')
tmp['property']['mozOpaque'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('mozOpaque')
tmp['property']['width'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('width')
tmp['method']['captureStream'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('captureStream')
tmp['method']['getContext'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('getContext')
tmp['method']['mozFetchAsStream'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('mozFetchAsStream')
tmp['method']['mozGetAsFile'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('mozGetAsFile')
tmp['method']['toBlob'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('toBlob')
tmp['method']['toDataURL'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('toDataURL')
tmp['method']['transferControlToOffscreen'] = typeof HTMLCanvasElement !== 'undefined' && typeof HTMLCanvasElement.prototype !== 'undefined' && HTMLCanvasElement.prototype.hasOwnProperty('transferControlToOffscreen')
result['HTMLCanvasElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['item'] = typeof HTMLCollection !== 'undefined' && typeof HTMLCollection.prototype !== 'undefined' && HTMLCollection.prototype.hasOwnProperty('item')
result['HTMLCollection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['getDistributedNodes()'] = typeof HTMLContentElement !== 'undefined' && typeof HTMLContentElement.prototype !== 'undefined' && HTMLContentElement.prototype.hasOwnProperty('getDistributedNodes()')
tmp['property']['select'] = typeof HTMLContentElement !== 'undefined' && typeof HTMLContentElement.prototype !== 'undefined' && HTMLContentElement.prototype.hasOwnProperty('select')
result['HTMLContentElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDListElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDataElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDataListElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDetailsElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['open'] = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype !== 'undefined' && HTMLDialogElement.prototype.hasOwnProperty('open')
tmp['property']['returnValue'] = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype !== 'undefined' && HTMLDialogElement.prototype.hasOwnProperty('returnValue')
tmp['method']['close'] = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype !== 'undefined' && HTMLDialogElement.prototype.hasOwnProperty('close')
tmp['method']['show'] = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype !== 'undefined' && HTMLDialogElement.prototype.hasOwnProperty('show')
tmp['method']['showModal'] = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype !== 'undefined' && HTMLDialogElement.prototype.hasOwnProperty('showModal')
result['HTMLDialogElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDivElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLDocument'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['contentEditable'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('contentEditable')
tmp['property']['contextMenu'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('contextMenu')
tmp['property']['dataset'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('dataset')
tmp['property']['dir'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('dir')
tmp['property']['hidden'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('hidden')
tmp['property']['isContentEditable'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('isContentEditable')
tmp['property']['lang'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('lang')
tmp['property']['nonce'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('nonce')
tmp['property']['offsetHeight'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('offsetHeight')
tmp['property']['offsetLeft'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('offsetLeft')
tmp['property']['offsetParent'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('offsetParent')
tmp['property']['offsetTop'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('offsetTop')
tmp['property']['offsetWidth'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('offsetWidth')
tmp['property']['onabort'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onabort')
tmp['property']['onanimationcancel'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onanimationcancel')
tmp['property']['onanimationend'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onanimationend')
tmp['property']['onanimationiteration'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onanimationiteration')
tmp['property']['onauxclick'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onauxclick')
tmp['property']['onblur'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onblur')
tmp['property']['onchange'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onchange')
tmp['property']['onclick'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onclose')
tmp['property']['oncontextmenu'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('oncontextmenu')
tmp['property']['oncopy'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('oncopy')
tmp['property']['oncut'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('oncut')
tmp['property']['ondblclick'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ondblclick')
tmp['property']['onerror'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onerror')
tmp['property']['onfocus'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onfocus')
tmp['property']['ongotpointercapture'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['oninput'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('oninput')
tmp['property']['onkeydown'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onkeydown')
tmp['property']['onkeypress'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onkeypress')
tmp['property']['onkeyup'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onkeyup')
tmp['property']['onload'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onload')
tmp['property']['onloadend'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onloadend')
tmp['property']['onloadstart'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onloadstart')
tmp['property']['onlostpointercapture'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['onmousedown'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onmousedown')
tmp['property']['onmousemove'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onmousemove')
tmp['property']['onmouseout'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onmouseout')
tmp['property']['onmouseover'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onmouseover')
tmp['property']['onmouseup'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onmouseup')
tmp['property']['onpaste'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpaste')
tmp['property']['onpointercancel'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointercancel')
tmp['property']['onpointerdown'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerdown')
tmp['property']['onpointerenter'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerenter')
tmp['property']['onpointerleave'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerleave')
tmp['property']['onpointermove'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointermove')
tmp['property']['onpointerout'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerout')
tmp['property']['onpointerover'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerover')
tmp['property']['onpointerup'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onpointerup')
tmp['property']['onreset'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onreset')
tmp['property']['onresize'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onresize')
tmp['property']['onscroll'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onscroll')
tmp['property']['onselect'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onselect')
tmp['property']['onselectionchange'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectstart'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onselectstart')
tmp['property']['onsubmit'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onsubmit')
tmp['property']['ontouchcancel'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ontouchcancel')
tmp['property']['ontouchmove'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ontouchmove')
tmp['property']['ontouchstart'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ontouchstart')
tmp['property']['ontransitioncancel'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ontransitioncancel')
tmp['property']['ontransitionend'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('ontransitionend')
tmp['property']['onwheel'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('onwheel')
tmp['property']['outerText'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('outerText')
tmp['property']['style'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('style')
tmp['property']['tabIndex'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('tabIndex')
tmp['property']['title'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('title')
tmp['method']['blur'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('blur')
tmp['method']['click'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('click')
tmp['method']['focus'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('focus')
tmp['method']['forceSpellCheck'] = typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype !== 'undefined' && HTMLElement.prototype.hasOwnProperty('forceSpellCheck')
result['HTMLElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLEmbedElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLFieldSetElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['color'] = typeof HTMLFontElement !== 'undefined' && typeof HTMLFontElement.prototype !== 'undefined' && HTMLFontElement.prototype.hasOwnProperty('color')
tmp['property']['face'] = typeof HTMLFontElement !== 'undefined' && typeof HTMLFontElement.prototype !== 'undefined' && HTMLFontElement.prototype.hasOwnProperty('face')
tmp['property']['size'] = typeof HTMLFontElement !== 'undefined' && typeof HTMLFontElement.prototype !== 'undefined' && HTMLFontElement.prototype.hasOwnProperty('size')
result['HTMLFontElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['namedItem'] = typeof HTMLFormControlsCollection !== 'undefined' && typeof HTMLFormControlsCollection.prototype !== 'undefined' && HTMLFormControlsCollection.prototype.hasOwnProperty('namedItem')
result['HTMLFormControlsCollection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['acceptCharset'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('acceptCharset')
tmp['property']['action'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('action')
tmp['property']['elements'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('elements')
tmp['property']['encoding'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('encoding')
tmp['property']['enctype'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('enctype')
tmp['property']['length'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('length')
tmp['property']['method'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('method')
tmp['property']['name'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('name')
tmp['property']['target'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('target')
tmp['method']['reportValidity'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('reportValidity')
tmp['method']['reset'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('reset')
tmp['method']['submit'] = typeof HTMLFormElement !== 'undefined' && typeof HTMLFormElement.prototype !== 'undefined' && HTMLFormElement.prototype.hasOwnProperty('submit')
result['HTMLFormElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onafterprint'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onafterprint')
tmp['property']['onbeforeprint'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onbeforeprint')
tmp['property']['onbeforeunload'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onbeforeunload')
tmp['property']['onhashchange'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onhashchange')
tmp['property']['onlanguagechange'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onlanguagechange')
tmp['property']['onmessage'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onmessageerror')
tmp['property']['onpopstate'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onpopstate')
tmp['property']['onrejectionhandled'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onrejectionhandled')
tmp['property']['onstorage'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onstorage')
tmp['property']['onunhandledrejection'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onunhandledrejection')
tmp['property']['onunload'] = typeof HTMLFrameSetElement !== 'undefined' && typeof HTMLFrameSetElement.prototype !== 'undefined' && HTMLFrameSetElement.prototype.hasOwnProperty('onunload')
result['HTMLFrameSetElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLHRElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLHeadElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLHeadingElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['version'] = typeof HTMLHtmlElement !== 'undefined' && typeof HTMLHtmlElement.prototype !== 'undefined' && HTMLHtmlElement.prototype.hasOwnProperty('version')
result['HTMLHtmlElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['hash'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('hash')
tmp['property']['host'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('host')
tmp['property']['hostname'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('hostname')
tmp['property']['href'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('href')
tmp['property']['origin'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('origin')
tmp['property']['password'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('password')
tmp['property']['pathname'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('pathname')
tmp['property']['port'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('port')
tmp['property']['protocol'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('protocol')
tmp['property']['search'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('search')
tmp['property']['searchParams'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('searchParams')
tmp['property']['username'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('username')
tmp['method']['toString'] = typeof HTMLHyperlinkElementUtils !== 'undefined' && typeof HTMLHyperlinkElementUtils.prototype !== 'undefined' && HTMLHyperlinkElementUtils.prototype.hasOwnProperty('toString')
result['HTMLHyperlinkElementUtils'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['allowPaymentRequest'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('allowPaymentRequest')
tmp['property']['contentWindow'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('contentWindow')
tmp['property']['csp'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('csp')
tmp['property']['referrerPolicy'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('referrerPolicy')
tmp['method']['addNextPaintListener'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('addNextPaintListener')
tmp['method']['clearMatch'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('clearMatch')
tmp['method']['download'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('download')
tmp['method']['executeScript'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('executeScript')
tmp['method']['findAll'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('findAll')
tmp['method']['findNext'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('findNext')
tmp['method']['getActive'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getActive')
tmp['method']['getCanGoBack'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getCanGoBack')
tmp['method']['getCanGoForward'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getCanGoForward')
tmp['method']['getContentDimensions'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getContentDimensions')
tmp['method']['getManifest'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getManifest')
tmp['method']['getMuted'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getMuted')
tmp['method']['getScreenshot'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getScreenshot')
tmp['method']['getStructuredData'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getStructuredData')
tmp['method']['getVisible'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getVisible')
tmp['method']['getVolume'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('getVolume')
tmp['method']['goBack'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('goBack')
tmp['method']['goForward'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('goForward')
tmp['method']['mute'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('mute')
tmp['method']['purgeHistory'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('purgeHistory')
tmp['method']['reload'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('reload')
tmp['method']['removeNextPaintListener'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('removeNextPaintListener')
tmp['method']['sendMouseEvent'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('sendMouseEvent')
tmp['method']['sendTouchEvent'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('sendTouchEvent')
tmp['method']['setActive'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('setActive')
tmp['method']['setNfcFocus'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('setNfcFocus')
tmp['method']['setVisible'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('setVisible')
tmp['method']['setVolume'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('setVolume')
tmp['method']['stop'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('stop')
tmp['method']['unmute'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('unmute')
tmp['method']['zoom'] = typeof HTMLIFrameElement !== 'undefined' && typeof HTMLIFrameElement.prototype !== 'undefined' && HTMLIFrameElement.prototype.hasOwnProperty('zoom')
result['HTMLIFrameElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['referrerPolicy'] = typeof HTMLImageElement !== 'undefined' && typeof HTMLImageElement.prototype !== 'undefined' && HTMLImageElement.prototype.hasOwnProperty('referrerPolicy')
result['HTMLImageElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('labels')
tmp['property']['multiple'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('multiple')
tmp['property']['webkitdirectory'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('webkitdirectory')
tmp['property']['webkitEntries'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('webkitEntries')
tmp['method']['mozGetFileNameArray'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('mozGetFileNameArray')
tmp['method']['mozSetFileNameArray'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('mozSetFileNameArray')
tmp['method']['select'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('select')
tmp['method']['setSelectionRange'] = typeof HTMLInputElement !== 'undefined' && typeof HTMLInputElement.prototype !== 'undefined' && HTMLInputElement.prototype.hasOwnProperty('setSelectionRange')
result['HTMLInputElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLIsIndexElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLKeygenElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLLIElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['control'] = typeof HTMLLabelElement !== 'undefined' && typeof HTMLLabelElement.prototype !== 'undefined' && HTMLLabelElement.prototype.hasOwnProperty('control')
tmp['property']['form'] = typeof HTMLLabelElement !== 'undefined' && typeof HTMLLabelElement.prototype !== 'undefined' && HTMLLabelElement.prototype.hasOwnProperty('form')
result['HTMLLabelElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLLegendElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['as'] = typeof HTMLLinkElement !== 'undefined' && typeof HTMLLinkElement.prototype !== 'undefined' && HTMLLinkElement.prototype.hasOwnProperty('as')
tmp['property']['referrerPolicy'] = typeof HTMLLinkElement !== 'undefined' && typeof HTMLLinkElement.prototype !== 'undefined' && HTMLLinkElement.prototype.hasOwnProperty('referrerPolicy')
tmp['property']['rel'] = typeof HTMLLinkElement !== 'undefined' && typeof HTMLLinkElement.prototype !== 'undefined' && HTMLLinkElement.prototype.hasOwnProperty('rel')
tmp['property']['relList'] = typeof HTMLLinkElement !== 'undefined' && typeof HTMLLinkElement.prototype !== 'undefined' && HTMLLinkElement.prototype.hasOwnProperty('relList')
result['HTMLLinkElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLMapElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['audioTracks'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('audioTracks')
tmp['property']['autoplay'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('autoplay')
tmp['property']['buffered'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('buffered')
tmp['property']['controller'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('controller')
tmp['property']['controls'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('controls')
tmp['property']['controlsList'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('controlsList')
tmp['property']['crossOrigin'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('crossOrigin')
tmp['property']['currentSrc'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('currentSrc')
tmp['property']['currentTime'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('currentTime')
tmp['property']['defaultMuted'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('defaultMuted')
tmp['property']['defaultPlaybackRate'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('defaultPlaybackRate')
tmp['property']['duration'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('duration')
tmp['property']['ended'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('ended')
tmp['property']['error'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('error')
tmp['property']['initialTime'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('initialTime')
tmp['property']['loop'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('loop')
tmp['property']['mediaGroup'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('mediaGroup')
tmp['property']['muted'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('muted')
tmp['property']['networkState'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('networkState')
tmp['property']['onerror'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('onerror')
tmp['property']['paused'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('paused')
tmp['property']['playbackRate'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('playbackRate')
tmp['property']['readyState'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('readyState')
tmp['property']['seekable'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('seekable')
tmp['property']['sinkId'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('sinkId')
tmp['property']['src'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('src')
tmp['property']['srcObject'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('srcObject')
tmp['property']['volume'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('volume')
tmp['method']['canPlayType'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('canPlayType')
tmp['method']['captureStream'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('captureStream')
tmp['method']['fastSeek'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('fastSeek')
tmp['method']['pause'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('pause')
tmp['method']['play'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('play')
tmp['method']['seekToNextFrame'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('seekToNextFrame')
tmp['method']['setMediaKeys'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('setMediaKeys')
tmp['method']['setSinkId'] = typeof HTMLMediaElement !== 'undefined' && typeof HTMLMediaElement.prototype !== 'undefined' && HTMLMediaElement.prototype.hasOwnProperty('setSinkId')
result['HTMLMediaElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLMetaElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLMeterElement !== 'undefined' && typeof HTMLMeterElement.prototype !== 'undefined' && HTMLMeterElement.prototype.hasOwnProperty('labels')
result['HTMLMeterElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLModElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLOListElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['typeMustMatch'] = typeof HTMLObjectElement !== 'undefined' && typeof HTMLObjectElement.prototype !== 'undefined' && HTMLObjectElement.prototype.hasOwnProperty('typeMustMatch')
result['HTMLObjectElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLOptGroupElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLOptionElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLOptionsCollection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLOutputElement !== 'undefined' && typeof HTMLOutputElement.prototype !== 'undefined' && HTMLOutputElement.prototype.hasOwnProperty('labels')
result['HTMLOutputElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLParagraphElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLParamElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLPictureElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLPreElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLProgressElement !== 'undefined' && typeof HTMLProgressElement.prototype !== 'undefined' && HTMLProgressElement.prototype.hasOwnProperty('labels')
result['HTMLProgressElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLQuoteElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLScriptElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['autofocus'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('autofocus')
tmp['property']['disabled'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('disabled')
tmp['property']['form'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('form')
tmp['property']['labels'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('labels')
tmp['property']['selectedIndex'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('selectedIndex')
tmp['property']['selectedOptions'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('selectedOptions')
tmp['property']['type'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('type')
tmp['method']['add'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('add')
tmp['method']['checkValidity'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('checkValidity')
tmp['method']['item'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('item')
tmp['method']['namedItem'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('namedItem')
tmp['method']['remove'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('remove')
tmp['method']['setCustomValidity'] = typeof HTMLSelectElement !== 'undefined' && typeof HTMLSelectElement.prototype !== 'undefined' && HTMLSelectElement.prototype.hasOwnProperty('setCustomValidity')
result['HTMLSelectElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['getDistributedNodes()'] = typeof HTMLShadowElement !== 'undefined' && typeof HTMLShadowElement.prototype !== 'undefined' && HTMLShadowElement.prototype.hasOwnProperty('getDistributedNodes()')
result['HTMLShadowElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof HTMLSlotElement !== 'undefined' && typeof HTMLSlotElement.prototype !== 'undefined' && HTMLSlotElement.prototype.hasOwnProperty('name')
tmp['method']['assignedNodes'] = typeof HTMLSlotElement !== 'undefined' && typeof HTMLSlotElement.prototype !== 'undefined' && HTMLSlotElement.prototype.hasOwnProperty('assignedNodes')
result['HTMLSlotElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLSourceElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLSpanElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['media'] = typeof HTMLStyleElement !== 'undefined' && typeof HTMLStyleElement.prototype !== 'undefined' && HTMLStyleElement.prototype.hasOwnProperty('media')
tmp['property']['scoped'] = typeof HTMLStyleElement !== 'undefined' && typeof HTMLStyleElement.prototype !== 'undefined' && HTMLStyleElement.prototype.hasOwnProperty('scoped')
tmp['property']['type'] = typeof HTMLStyleElement !== 'undefined' && typeof HTMLStyleElement.prototype !== 'undefined' && HTMLStyleElement.prototype.hasOwnProperty('type')
result['HTMLStyleElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableCaptionElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableCellElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableColElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableDataCellElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['align'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('align')
tmp['property']['bgColor'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('bgColor')
tmp['property']['border'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('border')
tmp['property']['caption'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('caption')
tmp['property']['cellPadding'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('cellPadding')
tmp['property']['cellSpacing'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('cellSpacing')
tmp['property']['frame'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('frame')
tmp['property']['rows'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('rows')
tmp['property']['rules'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('rules')
tmp['property']['summary'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('summary')
tmp['property']['tBodies'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('tBodies')
tmp['property']['tFoot'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('tFoot')
tmp['property']['tHead'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('tHead')
tmp['property']['width'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('width')
tmp['method']['createCaption'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('createCaption')
tmp['method']['createTFoot'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('createTFoot')
tmp['method']['createTHead'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('createTHead')
tmp['method']['deleteCaption'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('deleteCaption')
tmp['method']['deleteRow'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('deleteRow')
tmp['method']['deleteTFoot'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('deleteTFoot')
tmp['method']['deleteTHead'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('deleteTHead')
tmp['method']['insertRow'] = typeof HTMLTableElement !== 'undefined' && typeof HTMLTableElement.prototype !== 'undefined' && HTMLTableElement.prototype.hasOwnProperty('insertRow')
result['HTMLTableElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableHeaderCellElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['rowIndex'] = typeof HTMLTableRowElement !== 'undefined' && typeof HTMLTableRowElement.prototype !== 'undefined' && HTMLTableRowElement.prototype.hasOwnProperty('rowIndex')
tmp['method']['insertCell'] = typeof HTMLTableRowElement !== 'undefined' && typeof HTMLTableRowElement.prototype !== 'undefined' && HTMLTableRowElement.prototype.hasOwnProperty('insertCell')
result['HTMLTableRowElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTableSectionElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['content'] = typeof HTMLTemplateElement !== 'undefined' && typeof HTMLTemplateElement.prototype !== 'undefined' && HTMLTemplateElement.prototype.hasOwnProperty('content')
result['HTMLTemplateElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['labels'] = typeof HTMLTextAreaElement !== 'undefined' && typeof HTMLTextAreaElement.prototype !== 'undefined' && HTMLTextAreaElement.prototype.hasOwnProperty('labels')
result['HTMLTextAreaElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dateTime'] = typeof HTMLTimeElement !== 'undefined' && typeof HTMLTimeElement.prototype !== 'undefined' && HTMLTimeElement.prototype.hasOwnProperty('dateTime')
result['HTMLTimeElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLTitleElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['src'] = typeof HTMLTrackElement !== 'undefined' && typeof HTMLTrackElement.prototype !== 'undefined' && HTMLTrackElement.prototype.hasOwnProperty('src')
result['HTMLTrackElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLUListElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HTMLUnknownElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getVideoPlaybackQuality'] = typeof HTMLVideoElement !== 'undefined' && typeof HTMLVideoElement.prototype !== 'undefined' && HTMLVideoElement.prototype.hasOwnProperty('getVideoPlaybackQuality')
result['HTMLVideoElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['HashChangeEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['append'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('append')
tmp['method']['delete'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('delete')
tmp['method']['entries'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('entries')
tmp['method']['get'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('get')
tmp['method']['getAll'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('getAll')
tmp['method']['has'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('has')
tmp['method']['keys'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('keys')
tmp['method']['set'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('set')
tmp['method']['values'] = typeof Headers !== 'undefined' && typeof Headers.prototype !== 'undefined' && Headers.prototype.hasOwnProperty('values')
result['Headers'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof History !== 'undefined' && typeof History.prototype !== 'undefined' && History.prototype.hasOwnProperty('length')
result['History'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['direction'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('direction')
tmp['property']['key'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('key')
tmp['property']['primaryKey'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('primaryKey')
tmp['property']['source'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('source')
tmp['method']['advance'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('advance')
tmp['method']['continue'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('continue')
tmp['method']['continuePrimaryKey'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('continuePrimaryKey')
tmp['method']['delete'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('delete')
tmp['method']['update'] = typeof IDBCursor !== 'undefined' && typeof IDBCursor.prototype !== 'undefined' && IDBCursor.prototype.hasOwnProperty('update')
result['IDBCursor'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBCursorSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['value'] = typeof IDBCursorWithValue !== 'undefined' && typeof IDBCursorWithValue.prototype !== 'undefined' && IDBCursorWithValue.prototype.hasOwnProperty('value')
result['IDBCursorWithValue'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('name')
tmp['property']['objectStoreNames'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('objectStoreNames')
tmp['property']['onabort'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('onabort')
tmp['property']['onclose'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('onclose')
tmp['property']['onerror'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('onerror')
tmp['property']['onversionchange'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('onversionchange')
tmp['property']['version'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('version')
tmp['method']['close'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('close')
tmp['method']['createObjectStore'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('createObjectStore')
tmp['method']['deleteObjectStore'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('deleteObjectStore')
tmp['method']['transaction'] = typeof IDBDatabase !== 'undefined' && typeof IDBDatabase.prototype !== 'undefined' && IDBDatabase.prototype.hasOwnProperty('transaction')
result['IDBDatabase'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBDatabaseException'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBDatabaseSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBEnvironment'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBEnvironmentSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['cmp'] = typeof IDBFactory !== 'undefined' && typeof IDBFactory.prototype !== 'undefined' && IDBFactory.prototype.hasOwnProperty('cmp')
tmp['method']['deleteDatabase'] = typeof IDBFactory !== 'undefined' && typeof IDBFactory.prototype !== 'undefined' && IDBFactory.prototype.hasOwnProperty('deleteDatabase')
tmp['method']['open'] = typeof IDBFactory !== 'undefined' && typeof IDBFactory.prototype !== 'undefined' && IDBFactory.prototype.hasOwnProperty('open')
tmp['method']['open'] = typeof IDBFactory !== 'undefined' && typeof IDBFactory.prototype !== 'undefined' && IDBFactory.prototype.hasOwnProperty('open')
result['IDBFactory'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBFactorySync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['isAutoLocale'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('isAutoLocale')
tmp['property']['keyPath'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('keyPath')
tmp['property']['locale'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('locale')
tmp['property']['multiEntry'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('multiEntry')
tmp['property']['name'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('name')
tmp['property']['objectStore'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('objectStore')
tmp['property']['unique'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('unique')
tmp['method']['count'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('count')
tmp['method']['get'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('get')
tmp['method']['getAll'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('getAll')
tmp['method']['getAllKeys'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('getAllKeys')
tmp['method']['getKey'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('getKey')
tmp['method']['openCursor'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('openCursor')
tmp['method']['openKeyCursor'] = typeof IDBIndex !== 'undefined' && typeof IDBIndex.prototype !== 'undefined' && IDBIndex.prototype.hasOwnProperty('openKeyCursor')
result['IDBIndex'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBIndexSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['lower'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('lower')
tmp['property']['lowerOpen'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('lowerOpen')
tmp['property']['upper'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('upper')
tmp['property']['upperOpen'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('upperOpen')
tmp['method']['bound'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('bound')
tmp['method']['includes'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('includes')
tmp['method']['lowerBound'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('lowerBound')
tmp['method']['only'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('only')
tmp['method']['upperBound'] = typeof IDBKeyRange !== 'undefined' && typeof IDBKeyRange.prototype !== 'undefined' && IDBKeyRange.prototype.hasOwnProperty('upperBound')
result['IDBKeyRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBLocaleAwareKeyRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('name')
tmp['property']['onabort'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('onabort')
tmp['property']['onerror'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('onerror')
tmp['property']['type'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('type')
tmp['method']['getFile'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('getFile')
tmp['method']['open'] = typeof IDBMutableFile !== 'undefined' && typeof IDBMutableFile.prototype !== 'undefined' && IDBMutableFile.prototype.hasOwnProperty('open')
result['IDBMutableFile'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['autoIncrement'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('autoIncrement')
tmp['property']['indexNames'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('indexNames')
tmp['property']['keyPath'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('keyPath')
tmp['property']['name'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('name')
tmp['property']['transaction'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('transaction')
tmp['method']['add'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('add')
tmp['method']['clear'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('clear')
tmp['method']['count'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('count')
tmp['method']['createIndex'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('createIndex')
tmp['method']['delete'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('delete')
tmp['method']['deleteIndex'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('deleteIndex')
tmp['method']['get'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('get')
tmp['method']['getAll'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('getAll')
tmp['method']['getAllKeys'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('getAllKeys')
tmp['method']['getKey'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('getKey')
tmp['method']['index'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('index')
tmp['method']['openCursor'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('openCursor')
tmp['method']['openKeyCursor'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('openKeyCursor')
tmp['method']['put'] = typeof IDBObjectStore !== 'undefined' && typeof IDBObjectStore.prototype !== 'undefined' && IDBObjectStore.prototype.hasOwnProperty('put')
result['IDBObjectStore'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBObjectStoreSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onblocked'] = typeof IDBOpenDBRequest !== 'undefined' && typeof IDBOpenDBRequest.prototype !== 'undefined' && IDBOpenDBRequest.prototype.hasOwnProperty('onblocked')
tmp['property']['onupgradeneeded'] = typeof IDBOpenDBRequest !== 'undefined' && typeof IDBOpenDBRequest.prototype !== 'undefined' && IDBOpenDBRequest.prototype.hasOwnProperty('onupgradeneeded')
result['IDBOpenDBRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['error'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('error')
tmp['property']['onerror'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('onerror')
tmp['property']['onsuccess'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('onsuccess')
tmp['property']['readyState'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('readyState')
tmp['property']['result'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('result')
tmp['property']['source'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('source')
tmp['property']['transaction'] = typeof IDBRequest !== 'undefined' && typeof IDBRequest.prototype !== 'undefined' && IDBRequest.prototype.hasOwnProperty('transaction')
result['IDBRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['db'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('db')
tmp['property']['error'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('error')
tmp['property']['mode'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('mode')
tmp['property']['objectStoreNames'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('objectStoreNames')
tmp['property']['onabort'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('onabort')
tmp['property']['oncomplete'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('oncomplete')
tmp['property']['onerror'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('onerror')
tmp['method']['abort'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('abort')
tmp['method']['objectStore'] = typeof IDBTransaction !== 'undefined' && typeof IDBTransaction.prototype !== 'undefined' && IDBTransaction.prototype.hasOwnProperty('objectStore')
result['IDBTransaction'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['IDBTransactionSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['newVersion'] = typeof IDBVersionChangeEvent !== 'undefined' && typeof IDBVersionChangeEvent.prototype !== 'undefined' && IDBVersionChangeEvent.prototype.hasOwnProperty('newVersion')
tmp['property']['oldVersion'] = typeof IDBVersionChangeEvent !== 'undefined' && typeof IDBVersionChangeEvent.prototype !== 'undefined' && IDBVersionChangeEvent.prototype.hasOwnProperty('oldVersion')
tmp['property']['version'] = typeof IDBVersionChangeEvent !== 'undefined' && typeof IDBVersionChangeEvent.prototype !== 'undefined' && IDBVersionChangeEvent.prototype.hasOwnProperty('version')
result['IDBVersionChangeEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['setVersion'] = typeof IDBVersionChangeRequest !== 'undefined' && typeof IDBVersionChangeRequest.prototype !== 'undefined' && IDBVersionChangeRequest.prototype.hasOwnProperty('setVersion')
result['IDBVersionChangeRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getFrequencyResponse'] = typeof IIRFilterNode !== 'undefined' && typeof IIRFilterNode.prototype !== 'undefined' && IIRFilterNode.prototype.hasOwnProperty('getFrequencyResponse')
result['IIRFilterNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['didTimeout'] = typeof IdleDeadline !== 'undefined' && typeof IdleDeadline.prototype !== 'undefined' && IdleDeadline.prototype.hasOwnProperty('didTimeout')
tmp['method']['timeRemaining'] = typeof IdleDeadline !== 'undefined' && typeof IdleDeadline.prototype !== 'undefined' && IdleDeadline.prototype.hasOwnProperty('timeRemaining')
result['IdleDeadline'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['height'] = typeof ImageBitmap !== 'undefined' && typeof ImageBitmap.prototype !== 'undefined' && ImageBitmap.prototype.hasOwnProperty('height')
tmp['property']['width'] = typeof ImageBitmap !== 'undefined' && typeof ImageBitmap.prototype !== 'undefined' && ImageBitmap.prototype.hasOwnProperty('width')
tmp['method']['close'] = typeof ImageBitmap !== 'undefined' && typeof ImageBitmap.prototype !== 'undefined' && ImageBitmap.prototype.hasOwnProperty('close')
result['ImageBitmap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ImageBitmapFactories'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['transferFromImageBitmap'] = typeof ImageBitmapRenderingContext !== 'undefined' && typeof ImageBitmapRenderingContext.prototype !== 'undefined' && ImageBitmapRenderingContext.prototype.hasOwnProperty('transferFromImageBitmap')
result['ImageBitmapRenderingContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['track'] = typeof ImageCapture !== 'undefined' && typeof ImageCapture.prototype !== 'undefined' && ImageCapture.prototype.hasOwnProperty('track')
tmp['method']['getPhotoCapabilities'] = typeof ImageCapture !== 'undefined' && typeof ImageCapture.prototype !== 'undefined' && ImageCapture.prototype.hasOwnProperty('getPhotoCapabilities')
tmp['method']['getPhotoSettings'] = typeof ImageCapture !== 'undefined' && typeof ImageCapture.prototype !== 'undefined' && ImageCapture.prototype.hasOwnProperty('getPhotoSettings')
tmp['method']['grabFrame'] = typeof ImageCapture !== 'undefined' && typeof ImageCapture.prototype !== 'undefined' && ImageCapture.prototype.hasOwnProperty('grabFrame')
tmp['method']['takePhoto'] = typeof ImageCapture !== 'undefined' && typeof ImageCapture.prototype !== 'undefined' && ImageCapture.prototype.hasOwnProperty('takePhoto')
result['ImageCapture'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof ImageData !== 'undefined' && typeof ImageData.prototype !== 'undefined' && ImageData.prototype.hasOwnProperty('data')
tmp['property']['height'] = typeof ImageData !== 'undefined' && typeof ImageData.prototype !== 'undefined' && ImageData.prototype.hasOwnProperty('height')
tmp['property']['width'] = typeof ImageData !== 'undefined' && typeof ImageData.prototype !== 'undefined' && ImageData.prototype.hasOwnProperty('width')
result['ImageData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Index'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['InputDeviceCapabilities'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof InputEvent !== 'undefined' && typeof InputEvent.prototype !== 'undefined' && InputEvent.prototype.hasOwnProperty('data')
tmp['property']['dataTransfer'] = typeof InputEvent !== 'undefined' && typeof InputEvent.prototype !== 'undefined' && InputEvent.prototype.hasOwnProperty('dataTransfer')
tmp['property']['inputType'] = typeof InputEvent !== 'undefined' && typeof InputEvent.prototype !== 'undefined' && InputEvent.prototype.hasOwnProperty('inputType')
tmp['property']['isComposing'] = typeof InputEvent !== 'undefined' && typeof InputEvent.prototype !== 'undefined' && InputEvent.prototype.hasOwnProperty('isComposing')
tmp['method']['getTargetRanges'] = typeof InputEvent !== 'undefined' && typeof InputEvent.prototype !== 'undefined' && InputEvent.prototype.hasOwnProperty('getTargetRanges')
result['InputEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['activeWorker'] = typeof InstallEvent !== 'undefined' && typeof InstallEvent.prototype !== 'undefined' && InstallEvent.prototype.hasOwnProperty('activeWorker')
result['InstallEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['InstallTrigger'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['root'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('root')
tmp['property']['rootMargin'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('rootMargin')
tmp['property']['thresholds'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('thresholds')
tmp['method']['disconnect'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('disconnect')
tmp['method']['observe'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('observe')
tmp['method']['takeRecords'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('takeRecords')
tmp['method']['unobserve'] = typeof IntersectionObserver !== 'undefined' && typeof IntersectionObserver.prototype !== 'undefined' && IntersectionObserver.prototype.hasOwnProperty('unobserve')
result['IntersectionObserver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['boundingClientRect'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('boundingClientRect')
tmp['property']['intersectionRatio'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('intersectionRatio')
tmp['property']['intersectionRect'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('intersectionRect')
tmp['property']['isIntersecting'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('isIntersecting')
tmp['property']['rootBounds'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('rootBounds')
tmp['property']['target'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('target')
tmp['property']['time'] = typeof IntersectionObserverEntry !== 'undefined' && typeof IntersectionObserverEntry.prototype !== 'undefined' && IntersectionObserverEntry.prototype.hasOwnProperty('time')
result['IntersectionObserverEntry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['altKey'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('altKey')
tmp['property']['charCode'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('charCode')
tmp['property']['code'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('code')
tmp['property']['ctrlKey'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('ctrlKey')
tmp['property']['isComposing'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('isComposing')
tmp['property']['key'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('key')
tmp['property']['keyCode'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('keyCode')
tmp['property']['keyIdentifier'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('keyIdentifier')
tmp['property']['location'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('location')
tmp['property']['metaKey'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('metaKey')
tmp['property']['repeat'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('repeat')
tmp['property']['shiftKey'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('shiftKey')
tmp['property']['which'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('which')
tmp['method']['getModifierState'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('getModifierState')
tmp['method']['initKeyboardEvent'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('initKeyboardEvent')
tmp['method']['initKeyEvent'] = typeof KeyboardEvent !== 'undefined' && typeof KeyboardEvent.prototype !== 'undefined' && KeyboardEvent.prototype.hasOwnProperty('initKeyEvent')
result['KeyboardEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['setKeyframes'] = typeof KeyframeEffect !== 'undefined' && typeof KeyframeEffect.prototype !== 'undefined' && KeyframeEffect.prototype.hasOwnProperty('setKeyframes')
result['KeyframeEffect'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['composite'] = typeof KeyframeEffectReadOnly !== 'undefined' && typeof KeyframeEffectReadOnly.prototype !== 'undefined' && KeyframeEffectReadOnly.prototype.hasOwnProperty('composite')
tmp['property']['iterationComposite'] = typeof KeyframeEffectReadOnly !== 'undefined' && typeof KeyframeEffectReadOnly.prototype !== 'undefined' && KeyframeEffectReadOnly.prototype.hasOwnProperty('iterationComposite')
tmp['property']['target'] = typeof KeyframeEffectReadOnly !== 'undefined' && typeof KeyframeEffectReadOnly.prototype !== 'undefined' && KeyframeEffectReadOnly.prototype.hasOwnProperty('target')
tmp['method']['getKeyframes'] = typeof KeyframeEffectReadOnly !== 'undefined' && typeof KeyframeEffectReadOnly.prototype !== 'undefined' && KeyframeEffectReadOnly.prototype.hasOwnProperty('getKeyframes')
result['KeyframeEffectReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.formatValue'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.get'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.language.code'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.language.direction'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.once'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.ready'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.readyState'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['L10n.setAttributes'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['LinkStyle'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['LocalFileSystem'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['LocalFileSystemSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['LocalMediaStream'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['assign'] = typeof Location !== 'undefined' && typeof Location.prototype !== 'undefined' && Location.prototype.hasOwnProperty('assign')
tmp['method']['reload'] = typeof Location !== 'undefined' && typeof Location.prototype !== 'undefined' && Location.prototype.hasOwnProperty('reload')
tmp['method']['replace'] = typeof Location !== 'undefined' && typeof Location.prototype !== 'undefined' && Location.prototype.hasOwnProperty('replace')
result['Location'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['active'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('active')
tmp['property']['fileHandle'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('fileHandle')
tmp['property']['location'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('location')
tmp['property']['mode'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('mode')
tmp['property']['onabort'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('onabort')
tmp['property']['oncomplete'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('oncomplete')
tmp['property']['onerror'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('onerror')
tmp['method']['abort'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('abort')
tmp['method']['append'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('append')
tmp['method']['flush'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('flush')
tmp['method']['getMetadata'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('getMetadata')
tmp['method']['readAsArrayBuffer'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('readAsArrayBuffer')
tmp['method']['readAsText'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('readAsText')
tmp['method']['truncate'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('truncate')
tmp['method']['write'] = typeof LockedFile !== 'undefined' && typeof LockedFile.prototype !== 'undefined' && LockedFile.prototype.hasOwnProperty('write')
result['LockedFile'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['LongRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MIDIAccess'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MIDIConnectionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MIDIInput'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MIDIInputMap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MIDIOutputMap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MSGestureEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['deviceId'] = typeof MediaDeviceInfo !== 'undefined' && typeof MediaDeviceInfo.prototype !== 'undefined' && MediaDeviceInfo.prototype.hasOwnProperty('deviceId')
tmp['property']['groupId'] = typeof MediaDeviceInfo !== 'undefined' && typeof MediaDeviceInfo.prototype !== 'undefined' && MediaDeviceInfo.prototype.hasOwnProperty('groupId')
tmp['property']['kind'] = typeof MediaDeviceInfo !== 'undefined' && typeof MediaDeviceInfo.prototype !== 'undefined' && MediaDeviceInfo.prototype.hasOwnProperty('kind')
tmp['property']['label'] = typeof MediaDeviceInfo !== 'undefined' && typeof MediaDeviceInfo.prototype !== 'undefined' && MediaDeviceInfo.prototype.hasOwnProperty('label')
result['MediaDeviceInfo'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['ondevicechange'] = typeof MediaDevices !== 'undefined' && typeof MediaDevices.prototype !== 'undefined' && MediaDevices.prototype.hasOwnProperty('ondevicechange')
tmp['method']['enumerateDevices'] = typeof MediaDevices !== 'undefined' && typeof MediaDevices.prototype !== 'undefined' && MediaDevices.prototype.hasOwnProperty('enumerateDevices')
tmp['method']['getSupportedConstraints'] = typeof MediaDevices !== 'undefined' && typeof MediaDevices.prototype !== 'undefined' && MediaDevices.prototype.hasOwnProperty('getSupportedConstraints')
tmp['method']['getUserMedia'] = typeof MediaDevices !== 'undefined' && typeof MediaDevices.prototype !== 'undefined' && MediaDevices.prototype.hasOwnProperty('getUserMedia')
result['MediaDevices'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MediaElementAudioSourceNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['code'] = typeof MediaError !== 'undefined' && typeof MediaError.prototype !== 'undefined' && MediaError.prototype.hasOwnProperty('code')
tmp['property']['message'] = typeof MediaError !== 'undefined' && typeof MediaError.prototype !== 'undefined' && MediaError.prototype.hasOwnProperty('message')
result['MediaError'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['message'] = typeof MediaKeyMessageEvent !== 'undefined' && typeof MediaKeyMessageEvent.prototype !== 'undefined' && MediaKeyMessageEvent.prototype.hasOwnProperty('message')
tmp['property']['messageType'] = typeof MediaKeyMessageEvent !== 'undefined' && typeof MediaKeyMessageEvent.prototype !== 'undefined' && MediaKeyMessageEvent.prototype.hasOwnProperty('messageType')
result['MediaKeyMessageEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['closed'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('closed')
tmp['property']['expiration'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('expiration')
tmp['property']['keyStatuses'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('keyStatuses')
tmp['property']['sessionId'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('sessionId')
tmp['method']['close'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('close')
tmp['method']['generateRequest'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('generateRequest')
tmp['method']['load'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('load')
tmp['method']['remove'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('remove')
tmp['method']['update'] = typeof MediaKeySession !== 'undefined' && typeof MediaKeySession.prototype !== 'undefined' && MediaKeySession.prototype.hasOwnProperty('update')
result['MediaKeySession'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['size'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('size')
tmp['method']['entries'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('entries')
tmp['method']['forEach'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('forEach')
tmp['method']['get'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('get')
tmp['method']['has'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('has')
tmp['method']['keys'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('keys')
tmp['method']['values'] = typeof MediaKeyStatusMap !== 'undefined' && typeof MediaKeyStatusMap.prototype !== 'undefined' && MediaKeyStatusMap.prototype.hasOwnProperty('values')
result['MediaKeyStatusMap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['keySystem'] = typeof MediaKeySystemAccess !== 'undefined' && typeof MediaKeySystemAccess.prototype !== 'undefined' && MediaKeySystemAccess.prototype.hasOwnProperty('keySystem')
tmp['method']['createMediaKeys'] = typeof MediaKeySystemAccess !== 'undefined' && typeof MediaKeySystemAccess.prototype !== 'undefined' && MediaKeySystemAccess.prototype.hasOwnProperty('createMediaKeys')
tmp['method']['getConfiguration'] = typeof MediaKeySystemAccess !== 'undefined' && typeof MediaKeySystemAccess.prototype !== 'undefined' && MediaKeySystemAccess.prototype.hasOwnProperty('getConfiguration')
result['MediaKeySystemAccess'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['audioCapabilities'] = typeof MediaKeySystemConfiguration !== 'undefined' && typeof MediaKeySystemConfiguration.prototype !== 'undefined' && MediaKeySystemConfiguration.prototype.hasOwnProperty('audioCapabilities')
tmp['property']['distinctiveIdentifier'] = typeof MediaKeySystemConfiguration !== 'undefined' && typeof MediaKeySystemConfiguration.prototype !== 'undefined' && MediaKeySystemConfiguration.prototype.hasOwnProperty('distinctiveIdentifier')
tmp['property']['initDataTypes'] = typeof MediaKeySystemConfiguration !== 'undefined' && typeof MediaKeySystemConfiguration.prototype !== 'undefined' && MediaKeySystemConfiguration.prototype.hasOwnProperty('initDataTypes')
tmp['property']['persistentState'] = typeof MediaKeySystemConfiguration !== 'undefined' && typeof MediaKeySystemConfiguration.prototype !== 'undefined' && MediaKeySystemConfiguration.prototype.hasOwnProperty('persistentState')
tmp['property']['videoCapabilities'] = typeof MediaKeySystemConfiguration !== 'undefined' && typeof MediaKeySystemConfiguration.prototype !== 'undefined' && MediaKeySystemConfiguration.prototype.hasOwnProperty('videoCapabilities')
result['MediaKeySystemConfiguration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['createSession'] = typeof MediaKeys !== 'undefined' && typeof MediaKeys.prototype !== 'undefined' && MediaKeys.prototype.hasOwnProperty('createSession')
tmp['method']['setServerCertificate'] = typeof MediaKeys !== 'undefined' && typeof MediaKeys.prototype !== 'undefined' && MediaKeys.prototype.hasOwnProperty('setServerCertificate')
result['MediaKeys'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['album'] = typeof MediaMetadata !== 'undefined' && typeof MediaMetadata.prototype !== 'undefined' && MediaMetadata.prototype.hasOwnProperty('album')
tmp['property']['artist'] = typeof MediaMetadata !== 'undefined' && typeof MediaMetadata.prototype !== 'undefined' && MediaMetadata.prototype.hasOwnProperty('artist')
tmp['property']['artwork'] = typeof MediaMetadata !== 'undefined' && typeof MediaMetadata.prototype !== 'undefined' && MediaMetadata.prototype.hasOwnProperty('artwork')
tmp['property']['MediaMetadata()'] = typeof MediaMetadata !== 'undefined' && typeof MediaMetadata.prototype !== 'undefined' && MediaMetadata.prototype.hasOwnProperty('MediaMetadata()')
tmp['property']['title'] = typeof MediaMetadata !== 'undefined' && typeof MediaMetadata.prototype !== 'undefined' && MediaMetadata.prototype.hasOwnProperty('title')
result['MediaMetadata'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['matches'] = typeof MediaQueryList !== 'undefined' && typeof MediaQueryList.prototype !== 'undefined' && MediaQueryList.prototype.hasOwnProperty('matches')
tmp['property']['media'] = typeof MediaQueryList !== 'undefined' && typeof MediaQueryList.prototype !== 'undefined' && MediaQueryList.prototype.hasOwnProperty('media')
tmp['property']['onchange'] = typeof MediaQueryList !== 'undefined' && typeof MediaQueryList.prototype !== 'undefined' && MediaQueryList.prototype.hasOwnProperty('onchange')
tmp['method']['addListener'] = typeof MediaQueryList !== 'undefined' && typeof MediaQueryList.prototype !== 'undefined' && MediaQueryList.prototype.hasOwnProperty('addListener')
tmp['method']['removeListener'] = typeof MediaQueryList !== 'undefined' && typeof MediaQueryList.prototype !== 'undefined' && MediaQueryList.prototype.hasOwnProperty('removeListener')
result['MediaQueryList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['matches'] = typeof MediaQueryListEvent !== 'undefined' && typeof MediaQueryListEvent.prototype !== 'undefined' && MediaQueryListEvent.prototype.hasOwnProperty('matches')
tmp['property']['media'] = typeof MediaQueryListEvent !== 'undefined' && typeof MediaQueryListEvent.prototype !== 'undefined' && MediaQueryListEvent.prototype.hasOwnProperty('media')
result['MediaQueryListEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MediaQueryListListener'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['audioBitsPerSecond'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('audioBitsPerSecond')
tmp['property']['ignoreMutedMedia'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('ignoreMutedMedia')
tmp['property']['mimeType'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('mimeType')
tmp['property']['ondataavailable'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('ondataavailable')
tmp['property']['onerror'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onerror')
tmp['property']['onpause'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onpause')
tmp['property']['onresume'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onresume')
tmp['property']['onstart'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onstart')
tmp['property']['onstop'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onstop')
tmp['property']['onwarning'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('onwarning')
tmp['property']['state'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('state')
tmp['property']['stream'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('stream')
tmp['method']['isTypeSupported'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('isTypeSupported')
tmp['method']['pause'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('pause')
tmp['method']['requestData'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('requestData')
tmp['method']['resume'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('resume')
tmp['method']['start'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('start')
tmp['method']['stop'] = typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.prototype !== 'undefined' && MediaRecorder.prototype.hasOwnProperty('stop')
result['MediaRecorder'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['error'] = typeof MediaRecorderErrorEvent !== 'undefined' && typeof MediaRecorderErrorEvent.prototype !== 'undefined' && MediaRecorderErrorEvent.prototype.hasOwnProperty('error')
result['MediaRecorderErrorEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['metadata'] = typeof MediaSession !== 'undefined' && typeof MediaSession.prototype !== 'undefined' && MediaSession.prototype.hasOwnProperty('metadata')
tmp['property']['playbackState'] = typeof MediaSession !== 'undefined' && typeof MediaSession.prototype !== 'undefined' && MediaSession.prototype.hasOwnProperty('playbackState')
tmp['method']['setActionHandler'] = typeof MediaSession !== 'undefined' && typeof MediaSession.prototype !== 'undefined' && MediaSession.prototype.hasOwnProperty('setActionHandler')
result['MediaSession'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['max'] = typeof MediaSettingsRange !== 'undefined' && typeof MediaSettingsRange.prototype !== 'undefined' && MediaSettingsRange.prototype.hasOwnProperty('max')
tmp['property']['min'] = typeof MediaSettingsRange !== 'undefined' && typeof MediaSettingsRange.prototype !== 'undefined' && MediaSettingsRange.prototype.hasOwnProperty('min')
tmp['property']['step'] = typeof MediaSettingsRange !== 'undefined' && typeof MediaSettingsRange.prototype !== 'undefined' && MediaSettingsRange.prototype.hasOwnProperty('step')
result['MediaSettingsRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['activeSourceBuffers'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('activeSourceBuffers')
tmp['property']['duration'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('duration')
tmp['property']['readyState'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('readyState')
tmp['property']['sourceBuffers'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('sourceBuffers')
tmp['method']['addSourceBuffer'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('addSourceBuffer')
tmp['method']['endOfStream'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('endOfStream')
tmp['method']['isTypeSupported'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('isTypeSupported')
tmp['method']['removeSourceBuffer'] = typeof MediaSource !== 'undefined' && typeof MediaSource.prototype !== 'undefined' && MediaSource.prototype.hasOwnProperty('removeSourceBuffer')
result['MediaSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['active'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('active')
tmp['property']['ended'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('ended')
tmp['property']['getVideoTracks()'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('getVideoTracks()')
tmp['property']['id'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('id')
tmp['property']['onaddtrack'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('onaddtrack')
tmp['property']['onremovetrack'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('onremovetrack')
tmp['method']['addTrack'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('addTrack')
tmp['method']['clone'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('clone')
tmp['method']['getTrackById'] = typeof MediaStream !== 'undefined' && typeof MediaStream.prototype !== 'undefined' && MediaStream.prototype.hasOwnProperty('getTrackById')
result['MediaStream'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['stream'] = typeof MediaStreamAudioDestinationNode !== 'undefined' && typeof MediaStreamAudioDestinationNode.prototype !== 'undefined' && MediaStreamAudioDestinationNode.prototype.hasOwnProperty('stream')
result['MediaStreamAudioDestinationNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MediaStreamAudioSourceNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MediaStreamConstraints'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['stream'] = typeof MediaStreamEvent !== 'undefined' && typeof MediaStreamEvent.prototype !== 'undefined' && MediaStreamEvent.prototype.hasOwnProperty('stream')
result['MediaStreamEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['enabled'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('enabled')
tmp['property']['id'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('id')
tmp['property']['kind'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('kind')
tmp['property']['label'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('label')
tmp['property']['muted'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('muted')
tmp['property']['onended'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('onended')
tmp['property']['onmute'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('onmute')
tmp['property']['onoverconstrained'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('onoverconstrained')
tmp['property']['onunmute'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('onunmute')
tmp['property']['readyState'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('readyState')
tmp['property']['remote'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('remote')
tmp['method']['applyConstraints'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('applyConstraints')
tmp['method']['clone'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('clone')
tmp['method']['getCapabilities'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('getCapabilities')
tmp['method']['getConstraints'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('getConstraints')
tmp['method']['getSettings'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('getSettings')
tmp['method']['stop'] = typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.prototype !== 'undefined' && MediaStreamTrack.prototype.hasOwnProperty('stop')
result['MediaStreamTrack'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MediaStreamTrackEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['aspectRatio'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('aspectRatio')
tmp['property']['autoGainControl'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('autoGainControl')
tmp['property']['channelCount'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('channelCount')
tmp['property']['deviceId'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('deviceId')
tmp['property']['echoCancellation'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('echoCancellation')
tmp['property']['facingMode'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('facingMode')
tmp['property']['frameRate'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('frameRate')
tmp['property']['groupId'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('groupId')
tmp['property']['height'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('height')
tmp['property']['latency'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('latency')
tmp['property']['noiseSuppression'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('noiseSuppression')
tmp['property']['sampleRate'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('sampleRate')
tmp['property']['sampleSize'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('sampleSize')
tmp['property']['volume'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('volume')
tmp['property']['width'] = typeof MediaTrackConstraints !== 'undefined' && typeof MediaTrackConstraints.prototype !== 'undefined' && MediaTrackConstraints.prototype.hasOwnProperty('width')
result['MediaTrackConstraints'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['aspectRatio'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('aspectRatio')
tmp['property']['autoGainControl'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('autoGainControl')
tmp['property']['channelCount'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('channelCount')
tmp['property']['deviceId'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('deviceId')
tmp['property']['echoCancellation'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('echoCancellation')
tmp['property']['facingMode'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('facingMode')
tmp['property']['frameRate'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('frameRate')
tmp['property']['groupId'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('groupId')
tmp['property']['height'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('height')
tmp['property']['latency'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('latency')
tmp['property']['noiseSuppression'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('noiseSuppression')
tmp['property']['sampleRate'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('sampleRate')
tmp['property']['sampleSize'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('sampleSize')
tmp['property']['volume'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('volume')
tmp['property']['width'] = typeof MediaTrackSettings !== 'undefined' && typeof MediaTrackSettings.prototype !== 'undefined' && MediaTrackSettings.prototype.hasOwnProperty('width')
result['MediaTrackSettings'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['aspectRatio'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('aspectRatio')
tmp['property']['autoGainControl'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('autoGainControl')
tmp['property']['channelCount'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('channelCount')
tmp['property']['deviceId'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('deviceId')
tmp['property']['echoCancellation'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('echoCancellation')
tmp['property']['facingMode'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('facingMode')
tmp['property']['frameRate'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('frameRate')
tmp['property']['groupId'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('groupId')
tmp['property']['height'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('height')
tmp['property']['latency'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('latency')
tmp['property']['noiseSuppression'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('noiseSuppression')
tmp['property']['sampleRate'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('sampleRate')
tmp['property']['sampleSize'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('sampleSize')
tmp['property']['volume'] = typeof MediaTrackSupportedConstraints !== 'undefined' && typeof MediaTrackSupportedConstraints.prototype !== 'undefined' && MediaTrackSupportedConstraints.prototype.hasOwnProperty('volume')
result['MediaTrackSupportedConstraints'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['port1'] = typeof MessageChannel !== 'undefined' && typeof MessageChannel.prototype !== 'undefined' && MessageChannel.prototype.hasOwnProperty('port1')
tmp['property']['port2'] = typeof MessageChannel !== 'undefined' && typeof MessageChannel.prototype !== 'undefined' && MessageChannel.prototype.hasOwnProperty('port2')
result['MessageChannel'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof MessageEvent !== 'undefined' && typeof MessageEvent.prototype !== 'undefined' && MessageEvent.prototype.hasOwnProperty('data')
tmp['property']['lastEventId'] = typeof MessageEvent !== 'undefined' && typeof MessageEvent.prototype !== 'undefined' && MessageEvent.prototype.hasOwnProperty('lastEventId')
tmp['property']['origin'] = typeof MessageEvent !== 'undefined' && typeof MessageEvent.prototype !== 'undefined' && MessageEvent.prototype.hasOwnProperty('origin')
tmp['property']['ports'] = typeof MessageEvent !== 'undefined' && typeof MessageEvent.prototype !== 'undefined' && MessageEvent.prototype.hasOwnProperty('ports')
tmp['property']['source'] = typeof MessageEvent !== 'undefined' && typeof MessageEvent.prototype !== 'undefined' && MessageEvent.prototype.hasOwnProperty('source')
result['MessageEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onmessage'] = typeof MessagePort !== 'undefined' && typeof MessagePort.prototype !== 'undefined' && MessagePort.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof MessagePort !== 'undefined' && typeof MessagePort.prototype !== 'undefined' && MessagePort.prototype.hasOwnProperty('onmessageerror')
tmp['method']['close'] = typeof MessagePort !== 'undefined' && typeof MessagePort.prototype !== 'undefined' && MessagePort.prototype.hasOwnProperty('close')
tmp['method']['postMessage'] = typeof MessagePort !== 'undefined' && typeof MessagePort.prototype !== 'undefined' && MessagePort.prototype.hasOwnProperty('postMessage')
tmp['method']['start'] = typeof MessagePort !== 'undefined' && typeof MessagePort.prototype !== 'undefined' && MessagePort.prototype.hasOwnProperty('start')
result['MessagePort'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['modificationTime'] = typeof Metadata !== 'undefined' && typeof Metadata.prototype !== 'undefined' && Metadata.prototype.hasOwnProperty('modificationTime')
tmp['property']['size'] = typeof Metadata !== 'undefined' && typeof Metadata.prototype !== 'undefined' && Metadata.prototype.hasOwnProperty('size')
result['Metadata'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MimeType'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MimeTypeArray'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['altKey'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('altKey')
tmp['property']['button'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('button')
tmp['property']['buttons'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('buttons')
tmp['property']['clientX'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('clientX')
tmp['property']['clientY'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('clientY')
tmp['property']['ctrlKey'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('ctrlKey')
tmp['property']['metaKey'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('metaKey')
tmp['property']['movementX'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('movementX')
tmp['property']['movementY'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('movementY')
tmp['property']['mozInputSource'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('mozInputSource')
tmp['property']['offsetX'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('offsetX')
tmp['property']['offsetY'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('offsetY')
tmp['property']['pageX'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('pageX')
tmp['property']['pageY'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('pageY')
tmp['property']['region'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('region')
tmp['property']['relatedTarget'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('relatedTarget')
tmp['property']['screenX'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('screenX')
tmp['property']['screenY'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('screenY')
tmp['property']['shiftKey'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('shiftKey')
tmp['property']['WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN')
tmp['property']['WEBKIT_FORCE_AT_MOUSE_DOWN'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('WEBKIT_FORCE_AT_MOUSE_DOWN')
tmp['property']['webkitForce'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('webkitForce')
tmp['property']['which'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('which')
tmp['property']['x'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('x')
tmp['property']['y'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('y')
tmp['method']['getModifierState'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('getModifierState')
tmp['method']['initMouseEvent'] = typeof MouseEvent !== 'undefined' && typeof MouseEvent.prototype !== 'undefined' && MouseEvent.prototype.hasOwnProperty('initMouseEvent')
result['MouseEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MouseScrollEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MouseWheelEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MutationEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MutationObserver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['MutationRecord'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['NameList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getNamedItem'] = typeof NamedNodeMap !== 'undefined' && typeof NamedNodeMap.prototype !== 'undefined' && NamedNodeMap.prototype.hasOwnProperty('getNamedItem')
result['NamedNodeMap'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['NavigationPreloadManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['activeVRDisplays'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('activeVRDisplays')
tmp['property']['appCodeName'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('appCodeName')
tmp['property']['appName'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('appName')
tmp['property']['appVersion'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('appVersion')
tmp['property']['battery'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('battery')
tmp['property']['buildID'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('buildID')
tmp['property']['connection'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('connection')
tmp['property']['cookieEnabled'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('cookieEnabled')
tmp['property']['credentials'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('credentials')
tmp['property']['deviceMemory'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('deviceMemory')
tmp['property']['doNotTrack'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('doNotTrack')
tmp['property']['geolocation'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('geolocation')
tmp['property']['language'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('language')
tmp['property']['languages'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('languages')
tmp['property']['maxTouchPoints'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('maxTouchPoints')
tmp['property']['mediaDevices'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('mediaDevices')
tmp['property']['mozBluetooth'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('mozBluetooth')
tmp['property']['mozTime'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('mozTime')
tmp['property']['onLine'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('onLine')
tmp['property']['oscpu'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('oscpu')
tmp['property']['permissions'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('permissions')
tmp['property']['platform'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('platform')
tmp['property']['product'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('product')
tmp['property']['productSub'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('productSub')
tmp['property']['serviceWorker'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('serviceWorker')
tmp['property']['userAgent'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('userAgent')
tmp['property']['vendor'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('vendor')
tmp['property']['vendorSub'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('vendorSub')
tmp['method']['addIdleObserver'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('addIdleObserver')
tmp['method']['getBattery'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('getBattery')
tmp['method']['getGamepads'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('getGamepads')
tmp['method']['getUserMedia'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('getUserMedia')
tmp['method']['getVRDisplays'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('getVRDisplays')
tmp['method']['mozIsLocallyAvailable'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('mozIsLocallyAvailable')
tmp['method']['registerContentHandler'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('registerContentHandler')
tmp['method']['registerProtocolHandler'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('registerProtocolHandler')
tmp['method']['requestMediaKeySystemAccess'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('requestMediaKeySystemAccess')
tmp['method']['requestWakeLock'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('requestWakeLock')
tmp['method']['sendBeacon'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('sendBeacon')
tmp['method']['taintEnabled'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('taintEnabled')
tmp['method']['vibrate'] = typeof Navigator !== 'undefined' && typeof Navigator.prototype !== 'undefined' && Navigator.prototype.hasOwnProperty('vibrate')
result['Navigator'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['hardwareConcurrency'] = typeof NavigatorConcurrentHardware !== 'undefined' && typeof NavigatorConcurrentHardware.prototype !== 'undefined' && NavigatorConcurrentHardware.prototype.hasOwnProperty('hardwareConcurrency')
result['NavigatorConcurrentHardware'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['NavigatorGeolocation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['appCodeName'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('appCodeName')
tmp['property']['appName'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('appName')
tmp['property']['appVersion'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('appVersion')
tmp['property']['platform'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('platform')
tmp['property']['product'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('product')
tmp['property']['userAgent'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('userAgent')
tmp['method']['taintEnabled'] = typeof NavigatorID !== 'undefined' && typeof NavigatorID.prototype !== 'undefined' && NavigatorID.prototype.hasOwnProperty('taintEnabled')
result['NavigatorID'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['language'] = typeof NavigatorLanguage !== 'undefined' && typeof NavigatorLanguage.prototype !== 'undefined' && NavigatorLanguage.prototype.hasOwnProperty('language')
tmp['property']['languages'] = typeof NavigatorLanguage !== 'undefined' && typeof NavigatorLanguage.prototype !== 'undefined' && NavigatorLanguage.prototype.hasOwnProperty('languages')
result['NavigatorLanguage'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onLine'] = typeof NavigatorOnLine !== 'undefined' && typeof NavigatorOnLine.prototype !== 'undefined' && NavigatorOnLine.prototype.hasOwnProperty('onLine')
result['NavigatorOnLine'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['mimeTypes'] = typeof NavigatorPlugins !== 'undefined' && typeof NavigatorPlugins.prototype !== 'undefined' && NavigatorPlugins.prototype.hasOwnProperty('mimeTypes')
tmp['property']['plugins'] = typeof NavigatorPlugins !== 'undefined' && typeof NavigatorPlugins.prototype !== 'undefined' && NavigatorPlugins.prototype.hasOwnProperty('plugins')
tmp['method']['javaEnabled'] = typeof NavigatorPlugins !== 'undefined' && typeof NavigatorPlugins.prototype !== 'undefined' && NavigatorPlugins.prototype.hasOwnProperty('javaEnabled')
result['NavigatorPlugins'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['storage'] = typeof NavigatorStorage !== 'undefined' && typeof NavigatorStorage.prototype !== 'undefined' && NavigatorStorage.prototype.hasOwnProperty('storage')
result['NavigatorStorage'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['downlink'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('downlink')
tmp['property']['downlinkMax'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('downlinkMax')
tmp['property']['onchange'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('onchange')
tmp['property']['ontypechange'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('ontypechange')
tmp['property']['rtt'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('rtt')
tmp['property']['rtt'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('rtt')
tmp['property']['type'] = typeof NetworkInformation !== 'undefined' && typeof NetworkInformation.prototype !== 'undefined' && NetworkInformation.prototype.hasOwnProperty('type')
result['NetworkInformation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['baseURI'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('baseURI')
tmp['property']['baseURIObject'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('baseURIObject')
tmp['property']['childNodes'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('childNodes')
tmp['property']['firstChild'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('firstChild')
tmp['property']['innerText'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('innerText')
tmp['property']['isConnected'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('isConnected')
tmp['property']['lastChild'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('lastChild')
tmp['property']['localName'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('localName')
tmp['property']['namespaceURI'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('namespaceURI')
tmp['property']['nextSibling'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('nextSibling')
tmp['property']['nodeName'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('nodeName')
tmp['property']['nodePrincipal'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('nodePrincipal')
tmp['property']['nodeType'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('nodeType')
tmp['property']['nodeValue'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('nodeValue')
tmp['property']['outerText'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('outerText')
tmp['property']['ownerDocument'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('ownerDocument')
tmp['property']['parentElement'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('parentElement')
tmp['property']['parentNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('parentNode')
tmp['property']['prefix'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('prefix')
tmp['property']['previousSibling'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('previousSibling')
tmp['property']['rootNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('rootNode')
tmp['property']['textContent'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('textContent')
tmp['method']['appendChild'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('appendChild')
tmp['method']['cloneNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('cloneNode')
tmp['method']['compareDocumentPosition'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('compareDocumentPosition')
tmp['method']['contains'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('contains')
tmp['method']['getRootNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('getRootNode')
tmp['method']['getUserData'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('getUserData')
tmp['method']['hasChildNodes'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('hasChildNodes')
tmp['method']['insertBefore'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('insertBefore')
tmp['method']['isDefaultNamespace'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('isDefaultNamespace')
tmp['method']['isEqualNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('isEqualNode')
tmp['method']['isSameNode'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('isSameNode')
tmp['method']['isSupported'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('isSupported')
tmp['method']['lookupNamespaceURI'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('lookupNamespaceURI')
tmp['method']['lookupPrefix'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('lookupPrefix')
tmp['method']['normalize'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('normalize')
tmp['method']['removeChild'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('removeChild')
tmp['method']['replaceChild'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('replaceChild')
tmp['method']['setUserData'] = typeof Node !== 'undefined' && typeof Node.prototype !== 'undefined' && Node.prototype.hasOwnProperty('setUserData')
result['Node'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['acceptNode'] = typeof NodeFilter !== 'undefined' && typeof NodeFilter.prototype !== 'undefined' && NodeFilter.prototype.hasOwnProperty('acceptNode')
result['NodeFilter'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['expandEntityReferences'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('expandEntityReferences')
tmp['property']['filter'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('filter')
tmp['property']['pointerBeforeReferenceNode'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('pointerBeforeReferenceNode')
tmp['property']['referenceNode'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('referenceNode')
tmp['property']['root'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('root')
tmp['property']['whatToShow'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('whatToShow')
tmp['method']['detach'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('detach')
tmp['method']['nextNode'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('nextNode')
tmp['method']['previousNode'] = typeof NodeIterator !== 'undefined' && typeof NodeIterator.prototype !== 'undefined' && NodeIterator.prototype.hasOwnProperty('previousNode')
result['NodeIterator'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('length')
tmp['method']['entries'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('entries')
tmp['method']['forEach'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('forEach')
tmp['method']['item'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('item')
tmp['method']['keys'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('keys')
tmp['method']['values'] = typeof NodeList !== 'undefined' && typeof NodeList.prototype !== 'undefined' && NodeList.prototype.hasOwnProperty('values')
result['NodeList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['nextElementSibling'] = typeof NonDocumentTypeChildNode !== 'undefined' && typeof NonDocumentTypeChildNode.prototype !== 'undefined' && NonDocumentTypeChildNode.prototype.hasOwnProperty('nextElementSibling')
tmp['property']['previousElementSibling'] = typeof NonDocumentTypeChildNode !== 'undefined' && typeof NonDocumentTypeChildNode.prototype !== 'undefined' && NonDocumentTypeChildNode.prototype.hasOwnProperty('previousElementSibling')
result['NonDocumentTypeChildNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Notation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['action'] = typeof NotificationEvent !== 'undefined' && typeof NotificationEvent.prototype !== 'undefined' && NotificationEvent.prototype.hasOwnProperty('action')
tmp['property']['notification'] = typeof NotificationEvent !== 'undefined' && typeof NotificationEvent.prototype !== 'undefined' && NotificationEvent.prototype.hasOwnProperty('notification')
result['NotificationEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['NotifyAudioAvailableEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_element_index_uint'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_standard_derivatives'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_texture_float'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_texture_float_linear'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_texture_half_float'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['OES_texture_half_float_linear'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['bindVertexArrayOES'] = typeof OES_vertex_array_object !== 'undefined' && typeof OES_vertex_array_object.prototype !== 'undefined' && OES_vertex_array_object.prototype.hasOwnProperty('bindVertexArrayOES')
tmp['method']['createVertexArrayOES'] = typeof OES_vertex_array_object !== 'undefined' && typeof OES_vertex_array_object.prototype !== 'undefined' && OES_vertex_array_object.prototype.hasOwnProperty('createVertexArrayOES')
tmp['method']['deleteVertexArrayOES'] = typeof OES_vertex_array_object !== 'undefined' && typeof OES_vertex_array_object.prototype !== 'undefined' && OES_vertex_array_object.prototype.hasOwnProperty('deleteVertexArrayOES')
tmp['method']['isVertexArrayOES'] = typeof OES_vertex_array_object !== 'undefined' && typeof OES_vertex_array_object.prototype !== 'undefined' && OES_vertex_array_object.prototype.hasOwnProperty('isVertexArrayOES')
result['OES_vertex_array_object'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['renderedBuffer'] = typeof OfflineAudioCompletionEvent !== 'undefined' && typeof OfflineAudioCompletionEvent.prototype !== 'undefined' && OfflineAudioCompletionEvent.prototype.hasOwnProperty('renderedBuffer')
result['OfflineAudioCompletionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('length')
tmp['property']['oncomplete'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('oncomplete')
tmp['method']['resume'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('resume')
tmp['method']['startRendering (promise)'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('startRendering (promise)')
tmp['method']['startRendering'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('startRendering')
tmp['method']['suspend'] = typeof OfflineAudioContext !== 'undefined' && typeof OfflineAudioContext.prototype !== 'undefined' && OfflineAudioContext.prototype.hasOwnProperty('suspend')
result['OfflineAudioContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['height'] = typeof OffscreenCanvas !== 'undefined' && typeof OffscreenCanvas.prototype !== 'undefined' && OffscreenCanvas.prototype.hasOwnProperty('height')
tmp['property']['width'] = typeof OffscreenCanvas !== 'undefined' && typeof OffscreenCanvas.prototype !== 'undefined' && OffscreenCanvas.prototype.hasOwnProperty('width')
tmp['method']['getContext'] = typeof OffscreenCanvas !== 'undefined' && typeof OffscreenCanvas.prototype !== 'undefined' && OffscreenCanvas.prototype.hasOwnProperty('getContext')
tmp['method']['toBlob'] = typeof OffscreenCanvas !== 'undefined' && typeof OffscreenCanvas.prototype !== 'undefined' && OffscreenCanvas.prototype.hasOwnProperty('toBlob')
tmp['method']['transferToImageBitmap'] = typeof OffscreenCanvas !== 'undefined' && typeof OffscreenCanvas.prototype !== 'undefined' && OffscreenCanvas.prototype.hasOwnProperty('transferToImageBitmap')
result['OffscreenCanvas'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['detune'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('detune')
tmp['property']['frequency'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('frequency')
tmp['property']['onended'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('onended')
tmp['property']['type'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('type')
tmp['method']['setPeriodicWave'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('setPeriodicWave')
tmp['method']['start'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('start')
tmp['method']['stop'] = typeof OscillatorNode !== 'undefined' && typeof OscillatorNode.prototype !== 'undefined' && OscillatorNode.prototype.hasOwnProperty('stop')
result['OscillatorNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PageTransitionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['coneInnerAngle'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('coneInnerAngle')
tmp['property']['coneOuterAngle'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('coneOuterAngle')
tmp['property']['coneOuterGain'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('coneOuterGain')
tmp['property']['distanceModel'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('distanceModel')
tmp['property']['maxDistance'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('maxDistance')
tmp['property']['orientationX'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('orientationX')
tmp['property']['orientationY'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('orientationY')
tmp['property']['orientationZ'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('orientationZ')
tmp['property']['panningModel'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('panningModel')
tmp['property']['positionX'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('positionX')
tmp['property']['positionY'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('positionY')
tmp['property']['positionZ'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('positionZ')
tmp['property']['refDistance'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('refDistance')
tmp['property']['rolloffFactor'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('rolloffFactor')
tmp['method']['setOrientation'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('setOrientation')
tmp['method']['setPosition'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('setPosition')
tmp['method']['setVelocity'] = typeof PannerNode !== 'undefined' && typeof PannerNode.prototype !== 'undefined' && PannerNode.prototype.hasOwnProperty('setVelocity')
result['PannerNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['childElementCount'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('childElementCount')
tmp['property']['children'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('children')
tmp['property']['firstElementChild'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('firstElementChild')
tmp['property']['lastElementChild'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('lastElementChild')
tmp['method']['append'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('append')
tmp['method']['prepend'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('prepend')
tmp['method']['querySelectorAll'] = typeof ParentNode !== 'undefined' && typeof ParentNode.prototype !== 'undefined' && ParentNode.prototype.hasOwnProperty('querySelectorAll')
result['ParentNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['iconURL'] = typeof PasswordCredential !== 'undefined' && typeof PasswordCredential.prototype !== 'undefined' && PasswordCredential.prototype.hasOwnProperty('iconURL')
tmp['property']['name'] = typeof PasswordCredential !== 'undefined' && typeof PasswordCredential.prototype !== 'undefined' && PasswordCredential.prototype.hasOwnProperty('name')
tmp['property']['password'] = typeof PasswordCredential !== 'undefined' && typeof PasswordCredential.prototype !== 'undefined' && PasswordCredential.prototype.hasOwnProperty('password')
tmp['property']['passwordName'] = typeof PasswordCredential !== 'undefined' && typeof PasswordCredential.prototype !== 'undefined' && PasswordCredential.prototype.hasOwnProperty('passwordName')
result['PasswordCredential'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['addPath'] = typeof Path2D !== 'undefined' && typeof Path2D.prototype !== 'undefined' && Path2D.prototype.hasOwnProperty('addPath')
result['Path2D'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['addressLine'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('addressLine')
tmp['property']['city'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('city')
tmp['property']['country'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('country')
tmp['property']['dependentLocality'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('dependentLocality')
tmp['property']['languageCode'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('languageCode')
tmp['property']['organization'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('organization')
tmp['property']['phone'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('phone')
tmp['property']['postalCode'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('postalCode')
tmp['property']['recipient'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('recipient')
tmp['property']['region'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('region')
tmp['property']['regionCode'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('regionCode')
tmp['property']['sortingCode'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('sortingCode')
tmp['property']['toJSON()'] = typeof PaymentAddress !== 'undefined' && typeof PaymentAddress.prototype !== 'undefined' && PaymentAddress.prototype.hasOwnProperty('toJSON()')
result['PaymentAddress'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onshippingaddresschange'] = typeof PaymentRequest !== 'undefined' && typeof PaymentRequest.prototype !== 'undefined' && PaymentRequest.prototype.hasOwnProperty('onshippingaddresschange')
tmp['property']['shippingAddress'] = typeof PaymentRequest !== 'undefined' && typeof PaymentRequest.prototype !== 'undefined' && PaymentRequest.prototype.hasOwnProperty('shippingAddress')
tmp['property']['shippingOption'] = typeof PaymentRequest !== 'undefined' && typeof PaymentRequest.prototype !== 'undefined' && PaymentRequest.prototype.hasOwnProperty('shippingOption')
tmp['method']['canMakePayment'] = typeof PaymentRequest !== 'undefined' && typeof PaymentRequest.prototype !== 'undefined' && PaymentRequest.prototype.hasOwnProperty('canMakePayment')
tmp['method']['show'] = typeof PaymentRequest !== 'undefined' && typeof PaymentRequest.prototype !== 'undefined' && PaymentRequest.prototype.hasOwnProperty('show')
result['PaymentRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['paymentRequestId'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('paymentRequestId')
tmp['property']['paymentRequestOrigin'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('paymentRequestOrigin')
tmp['property']['topLevelOrigin'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('topLevelOrigin')
tmp['property']['total'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('total')
tmp['method']['openWindow'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('openWindow')
tmp['method']['respondWith'] = typeof PaymentRequestEvent !== 'undefined' && typeof PaymentRequestEvent.prototype !== 'undefined' && PaymentRequestEvent.prototype.hasOwnProperty('respondWith')
result['PaymentRequestEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['updateWith'] = typeof PaymentRequestUpdateEvent !== 'undefined' && typeof PaymentRequestUpdateEvent.prototype !== 'undefined' && PaymentRequestUpdateEvent.prototype.hasOwnProperty('updateWith')
result['PaymentRequestUpdateEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['details'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('details')
tmp['property']['methodName'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('methodName')
tmp['property']['payerEmail'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('payerEmail')
tmp['property']['payerName'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('payerName')
tmp['property']['payerPhone'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('payerPhone')
tmp['property']['requestId'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('requestId')
tmp['property']['shippingAddress'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('shippingAddress')
tmp['property']['shippingOption'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('shippingOption')
tmp['method']['complete'] = typeof PaymentResponse !== 'undefined' && typeof PaymentResponse.prototype !== 'undefined' && PaymentResponse.prototype.hasOwnProperty('complete')
result['PaymentResponse'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['navigation'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('navigation')
tmp['property']['onresourcetimingbufferfull'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('onresourcetimingbufferfull')
tmp['property']['timeOrigin'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('timeOrigin')
tmp['property']['timing'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('timing')
tmp['method']['clearMarks'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('clearMarks')
tmp['method']['clearMeasures'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('clearMeasures')
tmp['method']['clearResourceTimings'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('clearResourceTimings')
tmp['method']['getEntries'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('getEntries')
tmp['method']['getEntriesByName'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('getEntriesByName')
tmp['method']['getEntriesByType'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('getEntriesByType')
tmp['method']['mark'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('mark')
tmp['method']['measure'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('measure')
tmp['method']['now'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('now')
tmp['method']['setResourceTimingBufferSize'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('setResourceTimingBufferSize')
tmp['method']['toJSON'] = typeof Performance !== 'undefined' && typeof Performance.prototype !== 'undefined' && Performance.prototype.hasOwnProperty('toJSON')
result['Performance'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['duration'] = typeof PerformanceEntry !== 'undefined' && typeof PerformanceEntry.prototype !== 'undefined' && PerformanceEntry.prototype.hasOwnProperty('duration')
tmp['property']['entryType'] = typeof PerformanceEntry !== 'undefined' && typeof PerformanceEntry.prototype !== 'undefined' && PerformanceEntry.prototype.hasOwnProperty('entryType')
tmp['property']['name'] = typeof PerformanceEntry !== 'undefined' && typeof PerformanceEntry.prototype !== 'undefined' && PerformanceEntry.prototype.hasOwnProperty('name')
tmp['property']['startTime'] = typeof PerformanceEntry !== 'undefined' && typeof PerformanceEntry.prototype !== 'undefined' && PerformanceEntry.prototype.hasOwnProperty('startTime')
tmp['method']['toJSON'] = typeof PerformanceEntry !== 'undefined' && typeof PerformanceEntry.prototype !== 'undefined' && PerformanceEntry.prototype.hasOwnProperty('toJSON')
result['PerformanceEntry'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PerformanceFrameTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PerformanceLongTaskTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PerformanceMark'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PerformanceMeasure'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['redirectCount'] = typeof PerformanceNavigation !== 'undefined' && typeof PerformanceNavigation.prototype !== 'undefined' && PerformanceNavigation.prototype.hasOwnProperty('redirectCount')
tmp['property']['type'] = typeof PerformanceNavigation !== 'undefined' && typeof PerformanceNavigation.prototype !== 'undefined' && PerformanceNavigation.prototype.hasOwnProperty('type')
result['PerformanceNavigation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['domComplete'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('domComplete')
tmp['property']['domContentLoadedEventEnd'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('domContentLoadedEventEnd')
tmp['property']['domContentLoadedEventStart'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('domContentLoadedEventStart')
tmp['property']['domInteractive'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('domInteractive')
tmp['property']['loadEventEnd'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('loadEventEnd')
tmp['property']['loadEventStart'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('loadEventStart')
tmp['property']['redirectCount'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('redirectCount')
tmp['property']['type'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('type')
tmp['property']['unloadEventEnd'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('unloadEventEnd')
tmp['property']['unloadEventStart'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('unloadEventStart')
tmp['method']['toJSON'] = typeof PerformanceNavigationTiming !== 'undefined' && typeof PerformanceNavigationTiming.prototype !== 'undefined' && PerformanceNavigationTiming.prototype.hasOwnProperty('toJSON')
result['PerformanceNavigationTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['disconnect'] = typeof PerformanceObserver !== 'undefined' && typeof PerformanceObserver.prototype !== 'undefined' && PerformanceObserver.prototype.hasOwnProperty('disconnect')
tmp['method']['observe'] = typeof PerformanceObserver !== 'undefined' && typeof PerformanceObserver.prototype !== 'undefined' && PerformanceObserver.prototype.hasOwnProperty('observe')
tmp['method']['takeRecords'] = typeof PerformanceObserver !== 'undefined' && typeof PerformanceObserver.prototype !== 'undefined' && PerformanceObserver.prototype.hasOwnProperty('takeRecords')
result['PerformanceObserver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getEntries'] = typeof PerformanceObserverEntryList !== 'undefined' && typeof PerformanceObserverEntryList.prototype !== 'undefined' && PerformanceObserverEntryList.prototype.hasOwnProperty('getEntries')
tmp['method']['getEntriesByName'] = typeof PerformanceObserverEntryList !== 'undefined' && typeof PerformanceObserverEntryList.prototype !== 'undefined' && PerformanceObserverEntryList.prototype.hasOwnProperty('getEntriesByName')
tmp['method']['getEntriesByType'] = typeof PerformanceObserverEntryList !== 'undefined' && typeof PerformanceObserverEntryList.prototype !== 'undefined' && PerformanceObserverEntryList.prototype.hasOwnProperty('getEntriesByType')
result['PerformanceObserverEntryList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PerformancePaintTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['connectEnd'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('connectEnd')
tmp['property']['connectStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('connectStart')
tmp['property']['decodedBodySize'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('decodedBodySize')
tmp['property']['domainLookupEnd'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('domainLookupEnd')
tmp['property']['domainLookupStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('domainLookupStart')
tmp['property']['encodedBodySize'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('encodedBodySize')
tmp['property']['fetchStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('fetchStart')
tmp['property']['initiatorType'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('initiatorType')
tmp['property']['nextHopProtocol'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('nextHopProtocol')
tmp['property']['redirectEnd'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('redirectEnd')
tmp['property']['redirectStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('redirectStart')
tmp['property']['requestStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('requestStart')
tmp['property']['responseEnd'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('responseEnd')
tmp['property']['responseStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('responseStart')
tmp['property']['secureConnectionStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('secureConnectionStart')
tmp['property']['transferSize'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('transferSize')
tmp['property']['workerStart'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('workerStart')
tmp['method']['toJSON'] = typeof PerformanceResourceTiming !== 'undefined' && typeof PerformanceResourceTiming.prototype !== 'undefined' && PerformanceResourceTiming.prototype.hasOwnProperty('toJSON')
result['PerformanceResourceTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['connectEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('connectEnd')
tmp['property']['connectStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('connectStart')
tmp['property']['domainLookupEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domainLookupEnd')
tmp['property']['domainLookupStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domainLookupStart')
tmp['property']['domComplete'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domComplete')
tmp['property']['domContentLoadedEventEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domContentLoadedEventEnd')
tmp['property']['domContentLoadedEventStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domContentLoadedEventStart')
tmp['property']['domInteractive'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domInteractive')
tmp['property']['domLoading'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('domLoading')
tmp['property']['fetchStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('fetchStart')
tmp['property']['loadEventEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('loadEventEnd')
tmp['property']['loadEventStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('loadEventStart')
tmp['property']['navigationStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('navigationStart')
tmp['property']['redirectEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('redirectEnd')
tmp['property']['redirectStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('redirectStart')
tmp['property']['requestStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('requestStart')
tmp['property']['responseEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('responseEnd')
tmp['property']['responseStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('responseStart')
tmp['property']['secureConnectionStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('secureConnectionStart')
tmp['property']['unloadEventEnd'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('unloadEventEnd')
tmp['property']['unloadEventStart'] = typeof PerformanceTiming !== 'undefined' && typeof PerformanceTiming.prototype !== 'undefined' && PerformanceTiming.prototype.hasOwnProperty('unloadEventStart')
result['PerformanceTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PeriodicWave'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onchange'] = typeof PermissionStatus !== 'undefined' && typeof PermissionStatus.prototype !== 'undefined' && PermissionStatus.prototype.hasOwnProperty('onchange')
tmp['property']['state'] = typeof PermissionStatus !== 'undefined' && typeof PermissionStatus.prototype !== 'undefined' && PermissionStatus.prototype.hasOwnProperty('state')
tmp['property']['status'] = typeof PermissionStatus !== 'undefined' && typeof PermissionStatus.prototype !== 'undefined' && PermissionStatus.prototype.hasOwnProperty('status')
result['PermissionStatus'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['query'] = typeof Permissions !== 'undefined' && typeof Permissions.prototype !== 'undefined' && Permissions.prototype.hasOwnProperty('query')
tmp['method']['revoke'] = typeof Permissions !== 'undefined' && typeof Permissions.prototype !== 'undefined' && Permissions.prototype.hasOwnProperty('revoke')
result['Permissions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['fillLightMode'] = typeof PhotoCapabilities !== 'undefined' && typeof PhotoCapabilities.prototype !== 'undefined' && PhotoCapabilities.prototype.hasOwnProperty('fillLightMode')
tmp['property']['imageHeight'] = typeof PhotoCapabilities !== 'undefined' && typeof PhotoCapabilities.prototype !== 'undefined' && PhotoCapabilities.prototype.hasOwnProperty('imageHeight')
tmp['property']['imageWidth'] = typeof PhotoCapabilities !== 'undefined' && typeof PhotoCapabilities.prototype !== 'undefined' && PhotoCapabilities.prototype.hasOwnProperty('imageWidth')
tmp['property']['redEyeReduction'] = typeof PhotoCapabilities !== 'undefined' && typeof PhotoCapabilities.prototype !== 'undefined' && PhotoCapabilities.prototype.hasOwnProperty('redEyeReduction')
result['PhotoCapabilities'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Plugin'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PluginArray'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Point'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['height'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('height')
tmp['property']['isPrimary'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('isPrimary')
tmp['property']['pointerId'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('pointerId')
tmp['property']['pointerType'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('pointerType')
tmp['property']['pressure'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('pressure')
tmp['property']['tangentialPressure'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('tangentialPressure')
tmp['property']['tiltX'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('tiltX')
tmp['property']['tiltY'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('tiltY')
tmp['property']['twist'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('twist')
tmp['property']['width'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('width')
tmp['method']['getCoalescedEvents'] = typeof PointerEvent !== 'undefined' && typeof PointerEvent.prototype !== 'undefined' && PointerEvent.prototype.hasOwnProperty('getCoalescedEvents')
result['PointerEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PopStateEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['coords'] = typeof Position !== 'undefined' && typeof Position.prototype !== 'undefined' && Position.prototype.hasOwnProperty('coords')
tmp['property']['timestamp'] = typeof Position !== 'undefined' && typeof Position.prototype !== 'undefined' && Position.prototype.hasOwnProperty('timestamp')
result['Position'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['code'] = typeof PositionError !== 'undefined' && typeof PositionError.prototype !== 'undefined' && PositionError.prototype.hasOwnProperty('code')
tmp['property']['message'] = typeof PositionError !== 'undefined' && typeof PositionError.prototype !== 'undefined' && PositionError.prototype.hasOwnProperty('message')
result['PositionError'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['enableHighAccuracy'] = typeof PositionOptions !== 'undefined' && typeof PositionOptions.prototype !== 'undefined' && PositionOptions.prototype.hasOwnProperty('enableHighAccuracy')
tmp['property']['maximumAge'] = typeof PositionOptions !== 'undefined' && typeof PositionOptions.prototype !== 'undefined' && PositionOptions.prototype.hasOwnProperty('maximumAge')
tmp['property']['timeout'] = typeof PositionOptions !== 'undefined' && typeof PositionOptions.prototype !== 'undefined' && PositionOptions.prototype.hasOwnProperty('timeout')
result['PositionOptions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getImmediateState'] = typeof PositionSensorVRDevice !== 'undefined' && typeof PositionSensorVRDevice.prototype !== 'undefined' && PositionSensorVRDevice.prototype.hasOwnProperty('getImmediateState')
tmp['method']['getState'] = typeof PositionSensorVRDevice !== 'undefined' && typeof PositionSensorVRDevice.prototype !== 'undefined' && PositionSensorVRDevice.prototype.hasOwnProperty('getState')
tmp['method']['resetSensor'] = typeof PositionSensorVRDevice !== 'undefined' && typeof PositionSensorVRDevice.prototype !== 'undefined' && PositionSensorVRDevice.prototype.hasOwnProperty('resetSensor')
result['PositionSensorVRDevice'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['defaultRequest'] = typeof Presentation !== 'undefined' && typeof Presentation.prototype !== 'undefined' && Presentation.prototype.hasOwnProperty('defaultRequest')
tmp['property']['receiver'] = typeof Presentation !== 'undefined' && typeof Presentation.prototype !== 'undefined' && Presentation.prototype.hasOwnProperty('receiver')
result['Presentation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationAvailability'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['binaryType'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('binaryType')
tmp['property']['state'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('state')
tmp['property']['url'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('url')
tmp['method']['close'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('close')
tmp['method']['send'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('send')
tmp['method']['terminate'] = typeof PresentationConnection !== 'undefined' && typeof PresentationConnection.prototype !== 'undefined' && PresentationConnection.prototype.hasOwnProperty('terminate')
result['PresentationConnection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationConnectionAvailableEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationConnectionCloseEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationConnectionList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationReceiver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PresentationRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ProcessingInstruction'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['lengthComputable'] = typeof ProgressEvent !== 'undefined' && typeof ProgressEvent.prototype !== 'undefined' && ProgressEvent.prototype.hasOwnProperty('lengthComputable')
tmp['property']['loaded'] = typeof ProgressEvent !== 'undefined' && typeof ProgressEvent.prototype !== 'undefined' && ProgressEvent.prototype.hasOwnProperty('loaded')
tmp['property']['total'] = typeof ProgressEvent !== 'undefined' && typeof ProgressEvent.prototype !== 'undefined' && ProgressEvent.prototype.hasOwnProperty('total')
tmp['method']['initProgressEvent'] = typeof ProgressEvent !== 'undefined' && typeof ProgressEvent.prototype !== 'undefined' && ProgressEvent.prototype.hasOwnProperty('initProgressEvent')
result['ProgressEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['promise'] = typeof PromiseRejectionEvent !== 'undefined' && typeof PromiseRejectionEvent.prototype !== 'undefined' && PromiseRejectionEvent.prototype.hasOwnProperty('promise')
tmp['property']['reason'] = typeof PromiseRejectionEvent !== 'undefined' && typeof PromiseRejectionEvent.prototype !== 'undefined' && PromiseRejectionEvent.prototype.hasOwnProperty('reason')
result['PromiseRejectionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PromiseResolver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PublicKeyCredential'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PublicKeyCredentialCreationOptions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PublicKeyCredentialRequestOptions'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof PushEvent !== 'undefined' && typeof PushEvent.prototype !== 'undefined' && PushEvent.prototype.hasOwnProperty('data')
result['PushEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['supportedContentEncodings'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('supportedContentEncodings')
tmp['method']['getSubscription'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('getSubscription')
tmp['method']['hasPermission'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('hasPermission')
tmp['method']['permissionState'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('permissionState')
tmp['method']['register'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('register')
tmp['method']['registrations'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('registrations')
tmp['method']['subscribe'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('subscribe')
tmp['method']['unregister'] = typeof PushManager !== 'undefined' && typeof PushManager.prototype !== 'undefined' && PushManager.prototype.hasOwnProperty('unregister')
result['PushManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['arrayBuffer'] = typeof PushMessageData !== 'undefined' && typeof PushMessageData.prototype !== 'undefined' && PushMessageData.prototype.hasOwnProperty('arrayBuffer')
tmp['method']['blob'] = typeof PushMessageData !== 'undefined' && typeof PushMessageData.prototype !== 'undefined' && PushMessageData.prototype.hasOwnProperty('blob')
tmp['method']['json'] = typeof PushMessageData !== 'undefined' && typeof PushMessageData.prototype !== 'undefined' && PushMessageData.prototype.hasOwnProperty('json')
tmp['method']['text'] = typeof PushMessageData !== 'undefined' && typeof PushMessageData.prototype !== 'undefined' && PushMessageData.prototype.hasOwnProperty('text')
result['PushMessageData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['PushRegistrationManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['endpoint'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('endpoint')
tmp['property']['expirationTime'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('expirationTime')
tmp['property']['options'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('options')
tmp['property']['subscriptionId'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('subscriptionId')
tmp['method']['getKey'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('getKey')
tmp['method']['toJSON'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('toJSON')
tmp['method']['unsubscribe'] = typeof PushSubscription !== 'undefined' && typeof PushSubscription.prototype !== 'undefined' && PushSubscription.prototype.hasOwnProperty('unsubscribe')
result['PushSubscription'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCCertificate'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCConfiguration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['ontonechange'] = typeof RTCDTMFSender !== 'undefined' && typeof RTCDTMFSender.prototype !== 'undefined' && RTCDTMFSender.prototype.hasOwnProperty('ontonechange')
tmp['property']['toneBuffer'] = typeof RTCDTMFSender !== 'undefined' && typeof RTCDTMFSender.prototype !== 'undefined' && RTCDTMFSender.prototype.hasOwnProperty('toneBuffer')
tmp['method']['insertDTMF'] = typeof RTCDTMFSender !== 'undefined' && typeof RTCDTMFSender.prototype !== 'undefined' && RTCDTMFSender.prototype.hasOwnProperty('insertDTMF')
result['RTCDTMFSender'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['tone'] = typeof RTCDTMFToneChangeEvent !== 'undefined' && typeof RTCDTMFToneChangeEvent.prototype !== 'undefined' && RTCDTMFToneChangeEvent.prototype.hasOwnProperty('tone')
result['RTCDTMFToneChangeEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['binaryType'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('binaryType')
tmp['property']['bufferedAmount'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('bufferedAmount')
tmp['property']['bufferedAmountLowThreshold'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('bufferedAmountLowThreshold')
tmp['property']['id'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('id')
tmp['property']['label'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('label')
tmp['property']['maxPacketLifeTime'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('maxPacketLifeTime')
tmp['property']['maxRetransmits'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('maxRetransmits')
tmp['property']['negotiated'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('negotiated')
tmp['property']['onbufferedamountlow'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('onbufferedamountlow')
tmp['property']['onclose'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('onclose')
tmp['property']['onerror'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('onerror')
tmp['property']['onmessage'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('onmessage')
tmp['property']['onopen'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('onopen')
tmp['property']['ordered'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('ordered')
tmp['property']['protocol'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('protocol')
tmp['property']['readyState'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('readyState')
tmp['property']['reliable'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('reliable')
tmp['property']['stream'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('stream')
tmp['method']['close'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('close')
tmp['method']['send'] = typeof RTCDataChannel !== 'undefined' && typeof RTCDataChannel.prototype !== 'undefined' && RTCDataChannel.prototype.hasOwnProperty('send')
result['RTCDataChannel'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['channel'] = typeof RTCDataChannelEvent !== 'undefined' && typeof RTCDataChannelEvent.prototype !== 'undefined' && RTCDataChannelEvent.prototype.hasOwnProperty('channel')
result['RTCDataChannelEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['candidate'] = typeof RTCIceCandidate !== 'undefined' && typeof RTCIceCandidate.prototype !== 'undefined' && RTCIceCandidate.prototype.hasOwnProperty('candidate')
result['RTCIceCandidate'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['credential'] = typeof RTCIceServer !== 'undefined' && typeof RTCIceServer.prototype !== 'undefined' && RTCIceServer.prototype.hasOwnProperty('credential')
tmp['property']['credentialType'] = typeof RTCIceServer !== 'undefined' && typeof RTCIceServer.prototype !== 'undefined' && RTCIceServer.prototype.hasOwnProperty('credentialType')
tmp['property']['url'] = typeof RTCIceServer !== 'undefined' && typeof RTCIceServer.prototype !== 'undefined' && RTCIceServer.prototype.hasOwnProperty('url')
tmp['property']['urls'] = typeof RTCIceServer !== 'undefined' && typeof RTCIceServer.prototype !== 'undefined' && RTCIceServer.prototype.hasOwnProperty('urls')
tmp['property']['username'] = typeof RTCIceServer !== 'undefined' && typeof RTCIceServer.prototype !== 'undefined' && RTCIceServer.prototype.hasOwnProperty('username')
result['RTCIceServer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCIdentityAssertion'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['idp'] = typeof RTCIdentityErrorEvent !== 'undefined' && typeof RTCIdentityErrorEvent.prototype !== 'undefined' && RTCIdentityErrorEvent.prototype.hasOwnProperty('idp')
tmp['property']['loginUrl'] = typeof RTCIdentityErrorEvent !== 'undefined' && typeof RTCIdentityErrorEvent.prototype !== 'undefined' && RTCIdentityErrorEvent.prototype.hasOwnProperty('loginUrl')
tmp['property']['protocol'] = typeof RTCIdentityErrorEvent !== 'undefined' && typeof RTCIdentityErrorEvent.prototype !== 'undefined' && RTCIdentityErrorEvent.prototype.hasOwnProperty('protocol')
result['RTCIdentityErrorEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['assertion'] = typeof RTCIdentityEvent !== 'undefined' && typeof RTCIdentityEvent.prototype !== 'undefined' && RTCIdentityEvent.prototype.hasOwnProperty('assertion')
result['RTCIdentityEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['canTrickleIceCandidates'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('canTrickleIceCandidates')
tmp['property']['connectionState'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('connectionState')
tmp['property']['currentLocalDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('currentLocalDescription')
tmp['property']['currentRemoteDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('currentRemoteDescription')
tmp['property']['defaultIceServers'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('defaultIceServers')
tmp['property']['iceConnectionState'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('iceConnectionState')
tmp['property']['iceGatheringState'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('iceGatheringState')
tmp['property']['localDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('localDescription')
tmp['property']['onaddstream'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onaddstream')
tmp['property']['onconnectionstatechange'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onconnectionstatechange')
tmp['property']['ondatachannel'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('ondatachannel')
tmp['property']['onicecandidate'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onicecandidate')
tmp['property']['oniceconnectionstatechange'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('oniceconnectionstatechange')
tmp['property']['onicegatheringstatechange'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onicegatheringstatechange')
tmp['property']['onidentityresult'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onidentityresult')
tmp['property']['onidpassertionerror'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onidpassertionerror')
tmp['property']['onidpvalidationerror'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onidpvalidationerror')
tmp['property']['onnegotiationneeded'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onnegotiationneeded')
tmp['property']['onpeeridentity'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onpeeridentity')
tmp['property']['onremovestream'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onremovestream')
tmp['property']['onsignalingstatechange'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('onsignalingstatechange')
tmp['property']['ontrack'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('ontrack')
tmp['property']['peerIdentity'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('peerIdentity')
tmp['property']['pendingLocalDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('pendingLocalDescription')
tmp['property']['pendingRemoteDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('pendingRemoteDescription')
tmp['property']['remoteDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('remoteDescription')
tmp['property']['sctp'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('sctp')
tmp['property']['signalingState'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('signalingState')
tmp['method']['addIceCandidate'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('addIceCandidate')
tmp['method']['addStream'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('addStream')
tmp['method']['addTrack'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('addTrack')
tmp['method']['close'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('close')
tmp['method']['createAnswer'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('createAnswer')
tmp['method']['createDataChannel'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('createDataChannel')
tmp['method']['createOffer'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('createOffer')
tmp['method']['generateCertificate'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('generateCertificate')
tmp['method']['getConfiguration'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getConfiguration')
tmp['method']['getIdentityAssertion'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getIdentityAssertion')
tmp['method']['getLocalStreams'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getLocalStreams')
tmp['method']['getReceivers'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getReceivers')
tmp['method']['getRemoteStreams'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getRemoteStreams')
tmp['method']['getSenders'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getSenders')
tmp['method']['getStreamById'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('getStreamById')
tmp['method']['removeStream'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('removeStream')
tmp['method']['removeTrack'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('removeTrack')
tmp['method']['setConfiguration'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('setConfiguration')
tmp['method']['setIdentityProvider'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('setIdentityProvider')
tmp['method']['setLocalDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('setLocalDescription')
tmp['method']['setRemoteDescription'] = typeof RTCPeerConnection !== 'undefined' && typeof RTCPeerConnection.prototype !== 'undefined' && RTCPeerConnection.prototype.hasOwnProperty('setRemoteDescription')
result['RTCPeerConnection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['candidate'] = typeof RTCPeerConnectionIceEvent !== 'undefined' && typeof RTCPeerConnectionIceEvent.prototype !== 'undefined' && RTCPeerConnectionIceEvent.prototype.hasOwnProperty('candidate')
result['RTCPeerConnectionIceEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCRtpCodecParameters'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['audioLevel'] = typeof RTCRtpContributingSource !== 'undefined' && typeof RTCRtpContributingSource.prototype !== 'undefined' && RTCRtpContributingSource.prototype.hasOwnProperty('audioLevel')
tmp['property']['source'] = typeof RTCRtpContributingSource !== 'undefined' && typeof RTCRtpContributingSource.prototype !== 'undefined' && RTCRtpContributingSource.prototype.hasOwnProperty('source')
tmp['property']['timestamp'] = typeof RTCRtpContributingSource !== 'undefined' && typeof RTCRtpContributingSource.prototype !== 'undefined' && RTCRtpContributingSource.prototype.hasOwnProperty('timestamp')
result['RTCRtpContributingSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCRtpEncodingParameters'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['track'] = typeof RTCRtpReceiver !== 'undefined' && typeof RTCRtpReceiver.prototype !== 'undefined' && RTCRtpReceiver.prototype.hasOwnProperty('track')
tmp['method']['getContributingSources'] = typeof RTCRtpReceiver !== 'undefined' && typeof RTCRtpReceiver.prototype !== 'undefined' && RTCRtpReceiver.prototype.hasOwnProperty('getContributingSources')
tmp['method']['getStats'] = typeof RTCRtpReceiver !== 'undefined' && typeof RTCRtpReceiver.prototype !== 'undefined' && RTCRtpReceiver.prototype.hasOwnProperty('getStats')
tmp['method']['getSynchronizationSources'] = typeof RTCRtpReceiver !== 'undefined' && typeof RTCRtpReceiver.prototype !== 'undefined' && RTCRtpReceiver.prototype.hasOwnProperty('getSynchronizationSources')
result['RTCRtpReceiver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dtmf'] = typeof RTCRtpSender !== 'undefined' && typeof RTCRtpSender.prototype !== 'undefined' && RTCRtpSender.prototype.hasOwnProperty('dtmf')
tmp['method']['getStats'] = typeof RTCRtpSender !== 'undefined' && typeof RTCRtpSender.prototype !== 'undefined' && RTCRtpSender.prototype.hasOwnProperty('getStats')
tmp['method']['replaceTrack'] = typeof RTCRtpSender !== 'undefined' && typeof RTCRtpSender.prototype !== 'undefined' && RTCRtpSender.prototype.hasOwnProperty('replaceTrack')
result['RTCRtpSender'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['voiceActivityFlag'] = typeof RTCRtpSynchronizationSource !== 'undefined' && typeof RTCRtpSynchronizationSource.prototype !== 'undefined' && RTCRtpSynchronizationSource.prototype.hasOwnProperty('voiceActivityFlag')
result['RTCRtpSynchronizationSource'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentDirection'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('currentDirection')
tmp['property']['direction'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('direction')
tmp['property']['mid'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('mid')
tmp['property']['receiver'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('receiver')
tmp['property']['sender'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('sender')
tmp['property']['stopped'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('stopped')
tmp['method']['setCodecPreferences'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('setCodecPreferences')
tmp['method']['stop'] = typeof RTCRtpTransceiver !== 'undefined' && typeof RTCRtpTransceiver.prototype !== 'undefined' && RTCRtpTransceiver.prototype.hasOwnProperty('stop')
result['RTCRtpTransceiver'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCRtpTransceiverDirection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCRtpTransceiverInit'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCSctpTransport'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['sdp'] = typeof RTCSessionDescription !== 'undefined' && typeof RTCSessionDescription.prototype !== 'undefined' && RTCSessionDescription.prototype.hasOwnProperty('sdp')
tmp['property']['type'] = typeof RTCSessionDescription !== 'undefined' && typeof RTCSessionDescription.prototype !== 'undefined' && RTCSessionDescription.prototype.hasOwnProperty('type')
tmp['method']['toJSON'] = typeof RTCSessionDescription !== 'undefined' && typeof RTCSessionDescription.prototype !== 'undefined' && RTCSessionDescription.prototype.hasOwnProperty('toJSON')
result['RTCSessionDescription'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCSessionDescriptionCallback'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RTCStatsReport'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['value'] = typeof RadioNodeList !== 'undefined' && typeof RadioNodeList.prototype !== 'undefined' && RadioNodeList.prototype.hasOwnProperty('value')
result['RadioNodeList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['collapsed'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('collapsed')
tmp['property']['commonAncestorContainer'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('commonAncestorContainer')
tmp['property']['endContainer'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('endContainer')
tmp['property']['endOffset'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('endOffset')
tmp['property']['startContainer'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('startContainer')
tmp['property']['startOffset'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('startOffset')
tmp['method']['cloneContents'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('cloneContents')
tmp['method']['cloneRange'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('cloneRange')
tmp['method']['collapse'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('collapse')
tmp['method']['compareBoundaryPoints'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('compareBoundaryPoints')
tmp['method']['compareNode'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('compareNode')
tmp['method']['comparePoint'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('comparePoint')
tmp['method']['createContextualFragment'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('createContextualFragment')
tmp['method']['deleteContents'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('deleteContents')
tmp['method']['detach'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('detach')
tmp['method']['extractContents'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('extractContents')
tmp['method']['getBoundingClientRect'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('getBoundingClientRect')
tmp['method']['getClientRects'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('getClientRects')
tmp['method']['insertNode'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('insertNode')
tmp['method']['intersectsNode'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('intersectsNode')
tmp['method']['isPointInRange'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('isPointInRange')
tmp['method']['selectNode'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('selectNode')
tmp['method']['selectNodeContents'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('selectNodeContents')
tmp['method']['setEnd'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setEnd')
tmp['method']['setEndAfter'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setEndAfter')
tmp['method']['setEndBefore'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setEndBefore')
tmp['method']['setStart'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setStart')
tmp['method']['setStartAfter'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setStartAfter')
tmp['method']['setStartBefore'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('setStartBefore')
tmp['method']['surroundContents'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('surroundContents')
tmp['method']['toString'] = typeof Range !== 'undefined' && typeof Range.prototype !== 'undefined' && Range.prototype.hasOwnProperty('toString')
result['Range'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['byobRequest'] = typeof ReadableByteStreamController !== 'undefined' && typeof ReadableByteStreamController.prototype !== 'undefined' && ReadableByteStreamController.prototype.hasOwnProperty('byobRequest')
tmp['property']['desiredSize'] = typeof ReadableByteStreamController !== 'undefined' && typeof ReadableByteStreamController.prototype !== 'undefined' && ReadableByteStreamController.prototype.hasOwnProperty('desiredSize')
tmp['method']['close'] = typeof ReadableByteStreamController !== 'undefined' && typeof ReadableByteStreamController.prototype !== 'undefined' && ReadableByteStreamController.prototype.hasOwnProperty('close')
tmp['method']['enqueue'] = typeof ReadableByteStreamController !== 'undefined' && typeof ReadableByteStreamController.prototype !== 'undefined' && ReadableByteStreamController.prototype.hasOwnProperty('enqueue')
tmp['method']['error'] = typeof ReadableByteStreamController !== 'undefined' && typeof ReadableByteStreamController.prototype !== 'undefined' && ReadableByteStreamController.prototype.hasOwnProperty('error')
result['ReadableByteStreamController'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['locked'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('locked')
tmp['method']['cancel'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('cancel')
tmp['method']['getReader'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('getReader')
tmp['method']['pipeThrough'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('pipeThrough')
tmp['method']['pipeTo'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('pipeTo')
tmp['method']['tee'] = typeof ReadableStream !== 'undefined' && typeof ReadableStream.prototype !== 'undefined' && ReadableStream.prototype.hasOwnProperty('tee')
result['ReadableStream'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['closed'] = typeof ReadableStreamBYOBReader !== 'undefined' && typeof ReadableStreamBYOBReader.prototype !== 'undefined' && ReadableStreamBYOBReader.prototype.hasOwnProperty('closed')
tmp['method']['cancel'] = typeof ReadableStreamBYOBReader !== 'undefined' && typeof ReadableStreamBYOBReader.prototype !== 'undefined' && ReadableStreamBYOBReader.prototype.hasOwnProperty('cancel')
tmp['method']['read'] = typeof ReadableStreamBYOBReader !== 'undefined' && typeof ReadableStreamBYOBReader.prototype !== 'undefined' && ReadableStreamBYOBReader.prototype.hasOwnProperty('read')
tmp['method']['releaseLock'] = typeof ReadableStreamBYOBReader !== 'undefined' && typeof ReadableStreamBYOBReader.prototype !== 'undefined' && ReadableStreamBYOBReader.prototype.hasOwnProperty('releaseLock')
result['ReadableStreamBYOBReader'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['view'] = typeof ReadableStreamBYOBRequest !== 'undefined' && typeof ReadableStreamBYOBRequest.prototype !== 'undefined' && ReadableStreamBYOBRequest.prototype.hasOwnProperty('view')
tmp['method']['respond'] = typeof ReadableStreamBYOBRequest !== 'undefined' && typeof ReadableStreamBYOBRequest.prototype !== 'undefined' && ReadableStreamBYOBRequest.prototype.hasOwnProperty('respond')
tmp['method']['respondWithNewView'] = typeof ReadableStreamBYOBRequest !== 'undefined' && typeof ReadableStreamBYOBRequest.prototype !== 'undefined' && ReadableStreamBYOBRequest.prototype.hasOwnProperty('respondWithNewView')
result['ReadableStreamBYOBRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['desiredSize'] = typeof ReadableStreamDefaultController !== 'undefined' && typeof ReadableStreamDefaultController.prototype !== 'undefined' && ReadableStreamDefaultController.prototype.hasOwnProperty('desiredSize')
tmp['method']['close'] = typeof ReadableStreamDefaultController !== 'undefined' && typeof ReadableStreamDefaultController.prototype !== 'undefined' && ReadableStreamDefaultController.prototype.hasOwnProperty('close')
tmp['method']['enqueue'] = typeof ReadableStreamDefaultController !== 'undefined' && typeof ReadableStreamDefaultController.prototype !== 'undefined' && ReadableStreamDefaultController.prototype.hasOwnProperty('enqueue')
tmp['method']['error'] = typeof ReadableStreamDefaultController !== 'undefined' && typeof ReadableStreamDefaultController.prototype !== 'undefined' && ReadableStreamDefaultController.prototype.hasOwnProperty('error')
result['ReadableStreamDefaultController'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['closed'] = typeof ReadableStreamDefaultReader !== 'undefined' && typeof ReadableStreamDefaultReader.prototype !== 'undefined' && ReadableStreamDefaultReader.prototype.hasOwnProperty('closed')
tmp['method']['cancel'] = typeof ReadableStreamDefaultReader !== 'undefined' && typeof ReadableStreamDefaultReader.prototype !== 'undefined' && ReadableStreamDefaultReader.prototype.hasOwnProperty('cancel')
tmp['method']['read'] = typeof ReadableStreamDefaultReader !== 'undefined' && typeof ReadableStreamDefaultReader.prototype !== 'undefined' && ReadableStreamDefaultReader.prototype.hasOwnProperty('read')
tmp['method']['releaseLock'] = typeof ReadableStreamDefaultReader !== 'undefined' && typeof ReadableStreamDefaultReader.prototype !== 'undefined' && ReadableStreamDefaultReader.prototype.hasOwnProperty('releaseLock')
result['ReadableStreamDefaultReader'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['RenderingContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['body'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('body')
tmp['property']['bodyUsed'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('bodyUsed')
tmp['property']['cache'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('cache')
tmp['property']['context'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('context')
tmp['property']['credentials'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('credentials')
tmp['property']['headers'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('headers')
tmp['property']['integrity'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('integrity')
tmp['property']['method'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('method')
tmp['property']['mode'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('mode')
tmp['property']['redirect'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('redirect')
tmp['property']['referrer'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('referrer')
tmp['property']['referrerPolicy'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('referrerPolicy')
tmp['property']['url'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('url')
tmp['method']['arrayBuffer'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('arrayBuffer')
tmp['method']['blob'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('blob')
tmp['method']['clone'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('clone')
tmp['method']['formData'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('formData')
tmp['method']['json'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('json')
tmp['method']['text'] = typeof Request !== 'undefined' && typeof Request.prototype !== 'undefined' && Request.prototype.hasOwnProperty('text')
result['Request'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['body'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('body')
tmp['property']['bodyUsed'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('bodyUsed')
tmp['property']['headers'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('headers')
tmp['property']['ok'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('ok')
tmp['property']['redirected'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('redirected')
tmp['property']['status'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('status')
tmp['property']['statusText'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('statusText')
tmp['property']['type'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('type')
tmp['property']['url'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('url')
tmp['property']['useFinalURL'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('useFinalURL')
tmp['method']['arrayBuffer'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('arrayBuffer')
tmp['method']['blob'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('blob')
tmp['method']['clone'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('clone')
tmp['method']['error'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('error')
tmp['method']['formData'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('formData')
tmp['method']['json'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('json')
tmp['method']['redirect'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('redirect')
tmp['method']['text'] = typeof Response !== 'undefined' && typeof Response.prototype !== 'undefined' && Response.prototype.hasOwnProperty('text')
result['Response'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['target'] = typeof SVGAElement !== 'undefined' && typeof SVGAElement.prototype !== 'undefined' && SVGAElement.prototype.hasOwnProperty('target')
result['SVGAElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAltGlyphDefElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['glyphRef'] = typeof SVGAltGlyphElement !== 'undefined' && typeof SVGAltGlyphElement.prototype !== 'undefined' && SVGAltGlyphElement.prototype.hasOwnProperty('glyphRef')
result['SVGAltGlyphElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAltGlyphItemElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAngle'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimateColorElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimateElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimateMotionElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimateTransformElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedAngle'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedBoolean'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedEnumeration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedInteger'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedLength'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedLengthList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedNumber'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedNumberList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedPoints'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedPreserveAspectRatio'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedRect'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGAnimatedTransformList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onbegin'] = typeof SVGAnimationElement !== 'undefined' && typeof SVGAnimationElement.prototype !== 'undefined' && SVGAnimationElement.prototype.hasOwnProperty('onbegin')
tmp['property']['onend'] = typeof SVGAnimationElement !== 'undefined' && typeof SVGAnimationElement.prototype !== 'undefined' && SVGAnimationElement.prototype.hasOwnProperty('onend')
tmp['property']['onrepeat'] = typeof SVGAnimationElement !== 'undefined' && typeof SVGAnimationElement.prototype !== 'undefined' && SVGAnimationElement.prototype.hasOwnProperty('onrepeat')
tmp['property']['targetElement'] = typeof SVGAnimationElement !== 'undefined' && typeof SVGAnimationElement.prototype !== 'undefined' && SVGAnimationElement.prototype.hasOwnProperty('targetElement')
result['SVGAnimationElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGCircleElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGClipPathElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGColorProfileElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGComponentTransferFunctionElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGCursorElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGDefsElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGDescElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['dataset'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('dataset')
tmp['property']['onabort'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onabort')
tmp['property']['onanimationcancel'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onanimationcancel')
tmp['property']['onanimationend'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onanimationend')
tmp['property']['onanimationiteration'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onanimationiteration')
tmp['property']['onauxclick'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onauxclick')
tmp['property']['onblur'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onblur')
tmp['property']['onchange'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onchange')
tmp['property']['onclick'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onclose')
tmp['property']['oncontextmenu'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('oncontextmenu')
tmp['property']['ondblclick'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ondblclick')
tmp['property']['onerror'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onerror')
tmp['property']['onfocus'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onfocus')
tmp['property']['ongotpointercapture'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['oninput'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('oninput')
tmp['property']['onkeydown'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onkeydown')
tmp['property']['onkeypress'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onkeypress')
tmp['property']['onkeyup'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onkeyup')
tmp['property']['onload'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onload')
tmp['property']['onloadend'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onloadend')
tmp['property']['onloadstart'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onloadstart')
tmp['property']['onlostpointercapture'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['onmousedown'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onmousedown')
tmp['property']['onmousemove'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onmousemove')
tmp['property']['onmouseout'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onmouseout')
tmp['property']['onmouseover'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onmouseover')
tmp['property']['onmouseup'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onmouseup')
tmp['property']['onpointercancel'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointercancel')
tmp['property']['onpointerdown'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerdown')
tmp['property']['onpointerenter'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerenter')
tmp['property']['onpointerleave'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerleave')
tmp['property']['onpointermove'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointermove')
tmp['property']['onpointerout'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerout')
tmp['property']['onpointerover'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerover')
tmp['property']['onpointerup'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onpointerup')
tmp['property']['onreset'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onreset')
tmp['property']['onresize'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onresize')
tmp['property']['onscroll'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onscroll')
tmp['property']['onselect'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onselect')
tmp['property']['onselectionchange'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectstart'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onselectstart')
tmp['property']['onsubmit'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onsubmit')
tmp['property']['ontouchcancel'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ontouchcancel')
tmp['property']['ontouchmove'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ontouchmove')
tmp['property']['ontouchstart'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ontouchstart')
tmp['property']['ontransitioncancel'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ontransitioncancel')
tmp['property']['ontransitionend'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('ontransitionend')
tmp['property']['onwheel'] = typeof SVGElement !== 'undefined' && typeof SVGElement.prototype !== 'undefined' && SVGElement.prototype.hasOwnProperty('onwheel')
result['SVGElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGEllipseElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGExternalResourcesRequired'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEBlendElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEComponentTransferElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFECompositeElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEConvolveMatrixElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEDiffuseLightingElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEDisplacementMapElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEDistantLightElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEDropShadowElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEFloodElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEFuncAElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEFuncBElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEFuncGElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEFuncRElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEGaussianBlurElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEImageElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEMergeElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEMergeNodeElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEMorphologyElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEOffsetElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFEPointLightElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFESpecularLightingElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFESpotLightElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFETileElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFETurbulenceElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFilterElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFilterPrimitiveStandardAttributes'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontFaceElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontFaceFormatElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontFaceNameElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontFaceSrcElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGFontFaceUriElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGForeignObjectElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGGElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['pathLength'] = typeof SVGGeometryElement !== 'undefined' && typeof SVGGeometryElement.prototype !== 'undefined' && SVGGeometryElement.prototype.hasOwnProperty('pathLength')
tmp['method']['getPointAtLength'] = typeof SVGGeometryElement !== 'undefined' && typeof SVGGeometryElement.prototype !== 'undefined' && SVGGeometryElement.prototype.hasOwnProperty('getPointAtLength')
tmp['method']['getTotalLength'] = typeof SVGGeometryElement !== 'undefined' && typeof SVGGeometryElement.prototype !== 'undefined' && SVGGeometryElement.prototype.hasOwnProperty('getTotalLength')
tmp['method']['isPointInFill'] = typeof SVGGeometryElement !== 'undefined' && typeof SVGGeometryElement.prototype !== 'undefined' && SVGGeometryElement.prototype.hasOwnProperty('isPointInFill')
tmp['method']['isPointInStroke'] = typeof SVGGeometryElement !== 'undefined' && typeof SVGGeometryElement.prototype !== 'undefined' && SVGGeometryElement.prototype.hasOwnProperty('isPointInStroke')
result['SVGGeometryElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGGlyphElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGGlyphRefElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGGradientElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGGraphicsElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGHKernElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGImageElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGLength'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGLengthList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGLineElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGLinearGradientElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMPathElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMaskElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMatrix'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMeshElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMetadataElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGMissingGlyphElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGNumber'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGNumberList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['pathLength'] = typeof SVGPathElement !== 'undefined' && typeof SVGPathElement.prototype !== 'undefined' && SVGPathElement.prototype.hasOwnProperty('pathLength')
tmp['method']['getPointAtLength'] = typeof SVGPathElement !== 'undefined' && typeof SVGPathElement.prototype !== 'undefined' && SVGPathElement.prototype.hasOwnProperty('getPointAtLength')
tmp['method']['getTotalLength'] = typeof SVGPathElement !== 'undefined' && typeof SVGPathElement.prototype !== 'undefined' && SVGPathElement.prototype.hasOwnProperty('getTotalLength')
result['SVGPathElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGPatternElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGPoint'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGPolygonElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGPolylineElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGPreserveAspectRatio'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGRadialGradientElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGRect'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGRectElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGRenderingIntent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGSVGElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGScriptElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGSetElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGSolidcolorElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGStopElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGStringList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGStylable'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGStyleElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGSwitchElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGSymbolElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTRefElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTSpanElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTests'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTextContentElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTextElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTextPathElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTextPositioningElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTitleElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTransform'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTransformList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGTransformable'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGURIReference'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGUnitTypes'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGUseElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGVKernElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGViewElement'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['SVGZoomAndPan'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['availHeight'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('availHeight')
tmp['property']['availLeft'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('availLeft')
tmp['property']['availTop'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('availTop')
tmp['property']['availWidth'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('availWidth')
tmp['property']['colorDepth'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('colorDepth')
tmp['property']['height'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('height')
tmp['property']['left'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('left')
tmp['property']['mozBrightness'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('mozBrightness')
tmp['property']['mozEnabled'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('mozEnabled')
tmp['property']['onorientationchange'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('onorientationchange')
tmp['property']['orientation'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('orientation')
tmp['property']['pixelDepth'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('pixelDepth')
tmp['property']['top'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('top')
tmp['property']['width'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('width')
tmp['method']['lockOrientation'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('lockOrientation')
tmp['method']['unlockOrientation'] = typeof Screen !== 'undefined' && typeof Screen.prototype !== 'undefined' && Screen.prototype.hasOwnProperty('unlockOrientation')
result['Screen'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['angle'] = typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.prototype !== 'undefined' && ScreenOrientation.prototype.hasOwnProperty('angle')
tmp['property']['lock()'] = typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.prototype !== 'undefined' && ScreenOrientation.prototype.hasOwnProperty('lock()')
tmp['property']['onchange'] = typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.prototype !== 'undefined' && ScreenOrientation.prototype.hasOwnProperty('onchange')
tmp['property']['type'] = typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.prototype !== 'undefined' && ScreenOrientation.prototype.hasOwnProperty('type')
tmp['property']['unlock()'] = typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.prototype !== 'undefined' && ScreenOrientation.prototype.hasOwnProperty('unlock()')
result['ScreenOrientation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['bufferSize'] = typeof ScriptProcessorNode !== 'undefined' && typeof ScriptProcessorNode.prototype !== 'undefined' && ScriptProcessorNode.prototype.hasOwnProperty('bufferSize')
tmp['property']['onaudioprocess'] = typeof ScriptProcessorNode !== 'undefined' && typeof ScriptProcessorNode.prototype !== 'undefined' && ScriptProcessorNode.prototype.hasOwnProperty('onaudioprocess')
result['ScriptProcessorNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['blockedURI'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('blockedURI')
tmp['property']['columnNumber'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('columnNumber')
tmp['property']['disposition'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('disposition')
tmp['property']['documentURI'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('documentURI')
tmp['property']['effectiveDirective'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('effectiveDirective')
tmp['property']['lineNumber'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('lineNumber')
tmp['property']['originalPolicy'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('originalPolicy')
tmp['property']['referrer'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('referrer')
tmp['property']['sample'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('sample')
tmp['property']['sourceFile'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('sourceFile')
tmp['property']['statusCode'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('statusCode')
tmp['property']['violatedDirective'] = typeof SecurityPolicyViolationEvent !== 'undefined' && typeof SecurityPolicyViolationEvent.prototype !== 'undefined' && SecurityPolicyViolationEvent.prototype.hasOwnProperty('violatedDirective')
result['SecurityPolicyViolationEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['anchorNode'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('anchorNode')
tmp['property']['anchorOffset'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('anchorOffset')
tmp['property']['focusNode'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('focusNode')
tmp['property']['focusOffset'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('focusOffset')
tmp['property']['isCollapsed'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('isCollapsed')
tmp['property']['rangeCount'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('rangeCount')
tmp['property']['type'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('type')
tmp['method']['addRange'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('addRange')
tmp['method']['collapse'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('collapse')
tmp['method']['collapseToEnd'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('collapseToEnd')
tmp['method']['collapseToStart'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('collapseToStart')
tmp['method']['containsNode'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('containsNode')
tmp['method']['deleteFromDocument'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('deleteFromDocument')
tmp['method']['extend'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('extend')
tmp['method']['getRangeAt'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('getRangeAt')
tmp['method']['modify'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('modify')
tmp['method']['removeAllRanges'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('removeAllRanges')
tmp['method']['removeRange'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('removeRange')
tmp['method']['selectAllChildren'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('selectAllChildren')
tmp['method']['setBaseAndExtent'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('setBaseAndExtent')
tmp['method']['toString'] = typeof Selection !== 'undefined' && typeof Selection.prototype !== 'undefined' && Selection.prototype.hasOwnProperty('toString')
result['Selection'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof ServiceWorker !== 'undefined' && typeof ServiceWorker.prototype !== 'undefined' && ServiceWorker.prototype.hasOwnProperty('onerror')
tmp['property']['onstatechange'] = typeof ServiceWorker !== 'undefined' && typeof ServiceWorker.prototype !== 'undefined' && ServiceWorker.prototype.hasOwnProperty('onstatechange')
tmp['property']['scriptURL'] = typeof ServiceWorker !== 'undefined' && typeof ServiceWorker.prototype !== 'undefined' && ServiceWorker.prototype.hasOwnProperty('scriptURL')
tmp['property']['state'] = typeof ServiceWorker !== 'undefined' && typeof ServiceWorker.prototype !== 'undefined' && ServiceWorker.prototype.hasOwnProperty('state')
result['ServiceWorker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['controller'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('controller')
tmp['property']['oncontrollerchange'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('oncontrollerchange')
tmp['property']['onerror'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('onerror')
tmp['property']['onmessage'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('onmessage')
tmp['property']['ready'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('ready')
tmp['method']['getRegistration'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('getRegistration')
tmp['method']['getRegistrations'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('getRegistrations')
tmp['method']['register'] = typeof ServiceWorkerContainer !== 'undefined' && typeof ServiceWorkerContainer.prototype !== 'undefined' && ServiceWorkerContainer.prototype.hasOwnProperty('register')
result['ServiceWorkerContainer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['caches'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('caches')
tmp['property']['clients'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('clients')
tmp['property']['onactivate'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onactivate')
tmp['property']['onfetch'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onfetch')
tmp['property']['oninstall'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('oninstall')
tmp['property']['onmessage'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onmessage')
tmp['property']['onnotificationclick'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onnotificationclick')
tmp['property']['onnotificationclose'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onnotificationclose')
tmp['property']['onpush'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onpush')
tmp['property']['onpushsubscriptionchange'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('onpushsubscriptionchange')
tmp['property']['registration'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('registration')
tmp['method']['skipWaiting'] = typeof ServiceWorkerGlobalScope !== 'undefined' && typeof ServiceWorkerGlobalScope.prototype !== 'undefined' && ServiceWorkerGlobalScope.prototype.hasOwnProperty('skipWaiting')
result['ServiceWorkerGlobalScope'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['data'] = typeof ServiceWorkerMessageEvent !== 'undefined' && typeof ServiceWorkerMessageEvent.prototype !== 'undefined' && ServiceWorkerMessageEvent.prototype.hasOwnProperty('data')
tmp['property']['lastEventId'] = typeof ServiceWorkerMessageEvent !== 'undefined' && typeof ServiceWorkerMessageEvent.prototype !== 'undefined' && ServiceWorkerMessageEvent.prototype.hasOwnProperty('lastEventId')
tmp['property']['origin'] = typeof ServiceWorkerMessageEvent !== 'undefined' && typeof ServiceWorkerMessageEvent.prototype !== 'undefined' && ServiceWorkerMessageEvent.prototype.hasOwnProperty('origin')
tmp['property']['ports'] = typeof ServiceWorkerMessageEvent !== 'undefined' && typeof ServiceWorkerMessageEvent.prototype !== 'undefined' && ServiceWorkerMessageEvent.prototype.hasOwnProperty('ports')
tmp['property']['source'] = typeof ServiceWorkerMessageEvent !== 'undefined' && typeof ServiceWorkerMessageEvent.prototype !== 'undefined' && ServiceWorkerMessageEvent.prototype.hasOwnProperty('source')
result['ServiceWorkerMessageEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['active'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('active')
tmp['property']['installing'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('installing')
tmp['property']['navigationPreload'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('navigationPreload')
tmp['property']['onupdatefound'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('onupdatefound')
tmp['property']['periodicSync'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('periodicSync')
tmp['property']['pushManager'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('pushManager')
tmp['property']['scope'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('scope')
tmp['property']['sync'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('sync')
tmp['property']['waiting'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('waiting')
tmp['method']['getNotifications'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('getNotifications')
tmp['method']['showNotification'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification')
tmp['method']['unregister'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('unregister')
tmp['method']['update'] = typeof ServiceWorkerRegistration !== 'undefined' && typeof ServiceWorkerRegistration.prototype !== 'undefined' && ServiceWorkerRegistration.prototype.hasOwnProperty('update')
result['ServiceWorkerRegistration'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['ServiceWorkerState'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['host'] = typeof ShadowRoot !== 'undefined' && typeof ShadowRoot.prototype !== 'undefined' && ShadowRoot.prototype.hasOwnProperty('host')
tmp['property']['innerHTML'] = typeof ShadowRoot !== 'undefined' && typeof ShadowRoot.prototype !== 'undefined' && ShadowRoot.prototype.hasOwnProperty('innerHTML')
tmp['property']['mode'] = typeof ShadowRoot !== 'undefined' && typeof ShadowRoot.prototype !== 'undefined' && ShadowRoot.prototype.hasOwnProperty('mode')
result['ShadowRoot'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof SharedWorker !== 'undefined' && typeof SharedWorker.prototype !== 'undefined' && SharedWorker.prototype.hasOwnProperty('onerror')
tmp['property']['port'] = typeof SharedWorker !== 'undefined' && typeof SharedWorker.prototype !== 'undefined' && SharedWorker.prototype.hasOwnProperty('port')
result['SharedWorker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['applicationCache'] = typeof SharedWorkerGlobalScope !== 'undefined' && typeof SharedWorkerGlobalScope.prototype !== 'undefined' && SharedWorkerGlobalScope.prototype.hasOwnProperty('applicationCache')
tmp['property']['name'] = typeof SharedWorkerGlobalScope !== 'undefined' && typeof SharedWorkerGlobalScope.prototype !== 'undefined' && SharedWorkerGlobalScope.prototype.hasOwnProperty('name')
tmp['property']['onconnect'] = typeof SharedWorkerGlobalScope !== 'undefined' && typeof SharedWorkerGlobalScope.prototype !== 'undefined' && SharedWorkerGlobalScope.prototype.hasOwnProperty('onconnect')
tmp['method']['close'] = typeof SharedWorkerGlobalScope !== 'undefined' && typeof SharedWorkerGlobalScope.prototype !== 'undefined' && SharedWorkerGlobalScope.prototype.hasOwnProperty('close')
result['SharedWorkerGlobalScope'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['assignedSlot'] = typeof Slotable !== 'undefined' && typeof Slotable.prototype !== 'undefined' && Slotable.prototype.hasOwnProperty('assignedSlot')
result['Slotable'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['appendWindowEnd'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('appendWindowEnd')
tmp['property']['appendWindowStart'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('appendWindowStart')
tmp['property']['audioTracks'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('audioTracks')
tmp['property']['buffered'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('buffered')
tmp['property']['mode'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('mode')
tmp['property']['textTracks'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('textTracks')
tmp['property']['timestampOffset'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('timestampOffset')
tmp['property']['trackDefaults'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('trackDefaults')
tmp['property']['updating'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('updating')
tmp['property']['videoTracks'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('videoTracks')
tmp['method']['abort'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('abort')
tmp['method']['appendBuffer'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('appendBuffer')
tmp['method']['appendStream'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('appendStream')
tmp['method']['remove'] = typeof SourceBuffer !== 'undefined' && typeof SourceBuffer.prototype !== 'undefined' && SourceBuffer.prototype.hasOwnProperty('remove')
result['SourceBuffer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof SourceBufferList !== 'undefined' && typeof SourceBufferList.prototype !== 'undefined' && SourceBufferList.prototype.hasOwnProperty('length')
tmp['method']['SourceBuffer'] = typeof SourceBufferList !== 'undefined' && typeof SourceBufferList.prototype !== 'undefined' && SourceBufferList.prototype.hasOwnProperty('SourceBuffer')
result['SourceBufferList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['src'] = typeof SpeechGrammar !== 'undefined' && typeof SpeechGrammar.prototype !== 'undefined' && SpeechGrammar.prototype.hasOwnProperty('src')
tmp['property']['weight'] = typeof SpeechGrammar !== 'undefined' && typeof SpeechGrammar.prototype !== 'undefined' && SpeechGrammar.prototype.hasOwnProperty('weight')
result['SpeechGrammar'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof SpeechGrammarList !== 'undefined' && typeof SpeechGrammarList.prototype !== 'undefined' && SpeechGrammarList.prototype.hasOwnProperty('length')
tmp['method']['addFromString'] = typeof SpeechGrammarList !== 'undefined' && typeof SpeechGrammarList.prototype !== 'undefined' && SpeechGrammarList.prototype.hasOwnProperty('addFromString')
tmp['method']['addFromURI'] = typeof SpeechGrammarList !== 'undefined' && typeof SpeechGrammarList.prototype !== 'undefined' && SpeechGrammarList.prototype.hasOwnProperty('addFromURI')
tmp['method']['item'] = typeof SpeechGrammarList !== 'undefined' && typeof SpeechGrammarList.prototype !== 'undefined' && SpeechGrammarList.prototype.hasOwnProperty('item')
result['SpeechGrammarList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['continuous'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('continuous')
tmp['property']['grammars'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('grammars')
tmp['property']['interimResults'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('interimResults')
tmp['property']['lang'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('lang')
tmp['property']['maxAlternatives'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('maxAlternatives')
tmp['property']['onaudioend'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onaudioend')
tmp['property']['onaudiostart'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onaudiostart')
tmp['property']['onend'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onend')
tmp['property']['onerror'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onerror')
tmp['property']['onnomatch'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onnomatch')
tmp['property']['onresult'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onresult')
tmp['property']['onsoundend'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onsoundend')
tmp['property']['onsoundstart'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onsoundstart')
tmp['property']['onspeechend'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onspeechend')
tmp['property']['onspeechstart'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onspeechstart')
tmp['property']['onstart'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('onstart')
tmp['property']['serviceURI'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('serviceURI')
tmp['method']['abort'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('abort')
tmp['method']['start'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('start')
tmp['method']['stop'] = typeof SpeechRecognition !== 'undefined' && typeof SpeechRecognition.prototype !== 'undefined' && SpeechRecognition.prototype.hasOwnProperty('stop')
result['SpeechRecognition'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['confidence'] = typeof SpeechRecognitionAlternative !== 'undefined' && typeof SpeechRecognitionAlternative.prototype !== 'undefined' && SpeechRecognitionAlternative.prototype.hasOwnProperty('confidence')
tmp['property']['transcript'] = typeof SpeechRecognitionAlternative !== 'undefined' && typeof SpeechRecognitionAlternative.prototype !== 'undefined' && SpeechRecognitionAlternative.prototype.hasOwnProperty('transcript')
result['SpeechRecognitionAlternative'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['error'] = typeof SpeechRecognitionError !== 'undefined' && typeof SpeechRecognitionError.prototype !== 'undefined' && SpeechRecognitionError.prototype.hasOwnProperty('error')
tmp['property']['message'] = typeof SpeechRecognitionError !== 'undefined' && typeof SpeechRecognitionError.prototype !== 'undefined' && SpeechRecognitionError.prototype.hasOwnProperty('message')
result['SpeechRecognitionError'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['emma'] = typeof SpeechRecognitionEvent !== 'undefined' && typeof SpeechRecognitionEvent.prototype !== 'undefined' && SpeechRecognitionEvent.prototype.hasOwnProperty('emma')
tmp['property']['interpretation'] = typeof SpeechRecognitionEvent !== 'undefined' && typeof SpeechRecognitionEvent.prototype !== 'undefined' && SpeechRecognitionEvent.prototype.hasOwnProperty('interpretation')
tmp['property']['resultIndex'] = typeof SpeechRecognitionEvent !== 'undefined' && typeof SpeechRecognitionEvent.prototype !== 'undefined' && SpeechRecognitionEvent.prototype.hasOwnProperty('resultIndex')
tmp['property']['results'] = typeof SpeechRecognitionEvent !== 'undefined' && typeof SpeechRecognitionEvent.prototype !== 'undefined' && SpeechRecognitionEvent.prototype.hasOwnProperty('results')
result['SpeechRecognitionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['isFinal'] = typeof SpeechRecognitionResult !== 'undefined' && typeof SpeechRecognitionResult.prototype !== 'undefined' && SpeechRecognitionResult.prototype.hasOwnProperty('isFinal')
tmp['property']['length'] = typeof SpeechRecognitionResult !== 'undefined' && typeof SpeechRecognitionResult.prototype !== 'undefined' && SpeechRecognitionResult.prototype.hasOwnProperty('length')
tmp['method']['item'] = typeof SpeechRecognitionResult !== 'undefined' && typeof SpeechRecognitionResult.prototype !== 'undefined' && SpeechRecognitionResult.prototype.hasOwnProperty('item')
result['SpeechRecognitionResult'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof SpeechRecognitionResultList !== 'undefined' && typeof SpeechRecognitionResultList.prototype !== 'undefined' && SpeechRecognitionResultList.prototype.hasOwnProperty('length')
tmp['method']['item'] = typeof SpeechRecognitionResultList !== 'undefined' && typeof SpeechRecognitionResultList.prototype !== 'undefined' && SpeechRecognitionResultList.prototype.hasOwnProperty('item')
result['SpeechRecognitionResultList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onvoiceschanged'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('onvoiceschanged')
tmp['property']['paused'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('paused')
tmp['property']['pending'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('pending')
tmp['property']['speaking'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('speaking')
tmp['method']['cancel'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('cancel')
tmp['method']['getVoices'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('getVoices')
tmp['method']['pause'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('pause')
tmp['method']['resume'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('resume')
tmp['method']['speak'] = typeof SpeechSynthesis !== 'undefined' && typeof SpeechSynthesis.prototype !== 'undefined' && SpeechSynthesis.prototype.hasOwnProperty('speak')
result['SpeechSynthesis'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['error'] = typeof SpeechSynthesisErrorEvent !== 'undefined' && typeof SpeechSynthesisErrorEvent.prototype !== 'undefined' && SpeechSynthesisErrorEvent.prototype.hasOwnProperty('error')
result['SpeechSynthesisErrorEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['charIndex'] = typeof SpeechSynthesisEvent !== 'undefined' && typeof SpeechSynthesisEvent.prototype !== 'undefined' && SpeechSynthesisEvent.prototype.hasOwnProperty('charIndex')
tmp['property']['elapsedTime'] = typeof SpeechSynthesisEvent !== 'undefined' && typeof SpeechSynthesisEvent.prototype !== 'undefined' && SpeechSynthesisEvent.prototype.hasOwnProperty('elapsedTime')
tmp['property']['name'] = typeof SpeechSynthesisEvent !== 'undefined' && typeof SpeechSynthesisEvent.prototype !== 'undefined' && SpeechSynthesisEvent.prototype.hasOwnProperty('name')
tmp['property']['utterance'] = typeof SpeechSynthesisEvent !== 'undefined' && typeof SpeechSynthesisEvent.prototype !== 'undefined' && SpeechSynthesisEvent.prototype.hasOwnProperty('utterance')
result['SpeechSynthesisEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['lang'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('lang')
tmp['property']['onboundary'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onboundary')
tmp['property']['onend'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onend')
tmp['property']['onerror'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onerror')
tmp['property']['onmark'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onmark')
tmp['property']['onpause'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onpause')
tmp['property']['onresume'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onresume')
tmp['property']['onstart'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('onstart')
tmp['property']['pitch'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('pitch')
tmp['property']['rate'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('rate')
tmp['property']['text'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('text')
tmp['property']['voice'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('voice')
tmp['property']['volume'] = typeof SpeechSynthesisUtterance !== 'undefined' && typeof SpeechSynthesisUtterance.prototype !== 'undefined' && SpeechSynthesisUtterance.prototype.hasOwnProperty('volume')
result['SpeechSynthesisUtterance'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['default'] = typeof SpeechSynthesisVoice !== 'undefined' && typeof SpeechSynthesisVoice.prototype !== 'undefined' && SpeechSynthesisVoice.prototype.hasOwnProperty('default')
tmp['property']['lang'] = typeof SpeechSynthesisVoice !== 'undefined' && typeof SpeechSynthesisVoice.prototype !== 'undefined' && SpeechSynthesisVoice.prototype.hasOwnProperty('lang')
tmp['property']['localService'] = typeof SpeechSynthesisVoice !== 'undefined' && typeof SpeechSynthesisVoice.prototype !== 'undefined' && SpeechSynthesisVoice.prototype.hasOwnProperty('localService')
tmp['property']['name'] = typeof SpeechSynthesisVoice !== 'undefined' && typeof SpeechSynthesisVoice.prototype !== 'undefined' && SpeechSynthesisVoice.prototype.hasOwnProperty('name')
tmp['property']['voiceURI'] = typeof SpeechSynthesisVoice !== 'undefined' && typeof SpeechSynthesisVoice.prototype !== 'undefined' && SpeechSynthesisVoice.prototype.hasOwnProperty('voiceURI')
result['SpeechSynthesisVoice'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['collapsed'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('collapsed')
tmp['property']['endContainer'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('endContainer')
tmp['property']['endOffset'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('endOffset')
tmp['property']['startContainer'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('startContainer')
tmp['property']['startOffset'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('startOffset')
tmp['method']['toRange'] = typeof StaticRange !== 'undefined' && typeof StaticRange.prototype !== 'undefined' && StaticRange.prototype.hasOwnProperty('toRange')
result['StaticRange'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['pan'] = typeof StereoPannerNode !== 'undefined' && typeof StereoPannerNode.prototype !== 'undefined' && StereoPannerNode.prototype.hasOwnProperty('pan')
result['StereoPannerNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('length')
tmp['method']['clear'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('clear')
tmp['method']['getItem'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('getItem')
tmp['method']['key'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('key')
tmp['method']['removeItem'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('removeItem')
tmp['method']['setItem'] = typeof Storage !== 'undefined' && typeof Storage.prototype !== 'undefined' && Storage.prototype.hasOwnProperty('setItem')
result['Storage'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['quota'] = typeof StorageEstimate !== 'undefined' && typeof StorageEstimate.prototype !== 'undefined' && StorageEstimate.prototype.hasOwnProperty('quota')
result['StorageEstimate'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['StorageEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['estimate'] = typeof StorageManager !== 'undefined' && typeof StorageManager.prototype !== 'undefined' && StorageManager.prototype.hasOwnProperty('estimate')
tmp['method']['persist'] = typeof StorageManager !== 'undefined' && typeof StorageManager.prototype !== 'undefined' && StorageManager.prototype.hasOwnProperty('persist')
tmp['method']['persisted'] = typeof StorageManager !== 'undefined' && typeof StorageManager.prototype !== 'undefined' && StorageManager.prototype.hasOwnProperty('persisted')
result['StorageManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['queryInfo'] = typeof StorageQuota !== 'undefined' && typeof StorageQuota.prototype !== 'undefined' && StorageQuota.prototype.hasOwnProperty('queryInfo')
tmp['property']['requestPersistentQuota'] = typeof StorageQuota !== 'undefined' && typeof StorageQuota.prototype !== 'undefined' && StorageQuota.prototype.hasOwnProperty('requestPersistentQuota')
tmp['property']['supportedTypes'] = typeof StorageQuota !== 'undefined' && typeof StorageQuota.prototype !== 'undefined' && StorageQuota.prototype.hasOwnProperty('supportedTypes')
result['StorageQuota'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['disabled'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('disabled')
tmp['property']['href'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('href')
tmp['property']['media'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('media')
tmp['property']['ownerNode'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('ownerNode')
tmp['property']['parentStyleSheet'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('parentStyleSheet')
tmp['property']['title'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('title')
tmp['property']['type'] = typeof StyleSheet !== 'undefined' && typeof StyleSheet.prototype !== 'undefined' && StyleSheet.prototype.hasOwnProperty('type')
result['StyleSheet'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['StyleSheetList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['decrypt'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('decrypt')
tmp['method']['deriveKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('deriveKey')
tmp['method']['digest'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('digest')
tmp['method']['encrypt'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('encrypt')
tmp['method']['exportKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('exportKey')
tmp['method']['generateKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('generateKey')
tmp['method']['importKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('importKey')
tmp['method']['sign'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('sign')
tmp['method']['unwrapKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('unwrapKey')
tmp['method']['verify'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('verify')
tmp['method']['wrapKey'] = typeof SubtleCrypto !== 'undefined' && typeof SubtleCrypto.prototype !== 'undefined' && SubtleCrypto.prototype.hasOwnProperty('wrapKey')
result['SubtleCrypto'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['lastChance'] = typeof SyncEvent !== 'undefined' && typeof SyncEvent.prototype !== 'undefined' && SyncEvent.prototype.hasOwnProperty('lastChance')
tmp['property']['registration'] = typeof SyncEvent !== 'undefined' && typeof SyncEvent.prototype !== 'undefined' && SyncEvent.prototype.hasOwnProperty('registration')
tmp['property']['tag'] = typeof SyncEvent !== 'undefined' && typeof SyncEvent.prototype !== 'undefined' && SyncEvent.prototype.hasOwnProperty('tag')
result['SyncEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getTags'] = typeof SyncManager !== 'undefined' && typeof SyncManager.prototype !== 'undefined' && SyncManager.prototype.hasOwnProperty('getTags')
tmp['method']['register'] = typeof SyncManager !== 'undefined' && typeof SyncManager.prototype !== 'undefined' && SyncManager.prototype.hasOwnProperty('register')
result['SyncManager'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['containerId'] = typeof TaskAttributionTiming !== 'undefined' && typeof TaskAttributionTiming.prototype !== 'undefined' && TaskAttributionTiming.prototype.hasOwnProperty('containerId')
tmp['property']['containerName'] = typeof TaskAttributionTiming !== 'undefined' && typeof TaskAttributionTiming.prototype !== 'undefined' && TaskAttributionTiming.prototype.hasOwnProperty('containerName')
tmp['property']['containerSrc'] = typeof TaskAttributionTiming !== 'undefined' && typeof TaskAttributionTiming.prototype !== 'undefined' && TaskAttributionTiming.prototype.hasOwnProperty('containerSrc')
tmp['property']['containerType'] = typeof TaskAttributionTiming !== 'undefined' && typeof TaskAttributionTiming.prototype !== 'undefined' && TaskAttributionTiming.prototype.hasOwnProperty('containerType')
result['TaskAttributionTiming'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['assignedSlot'] = typeof Text !== 'undefined' && typeof Text.prototype !== 'undefined' && Text.prototype.hasOwnProperty('assignedSlot')
tmp['property']['isElementContentWhitespace'] = typeof Text !== 'undefined' && typeof Text.prototype !== 'undefined' && Text.prototype.hasOwnProperty('isElementContentWhitespace')
tmp['property']['wholeText'] = typeof Text !== 'undefined' && typeof Text.prototype !== 'undefined' && Text.prototype.hasOwnProperty('wholeText')
tmp['method']['replaceWholeText'] = typeof Text !== 'undefined' && typeof Text.prototype !== 'undefined' && Text.prototype.hasOwnProperty('replaceWholeText')
tmp['method']['splitText'] = typeof Text !== 'undefined' && typeof Text.prototype !== 'undefined' && Text.prototype.hasOwnProperty('splitText')
result['Text'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['encoding'] = typeof TextDecoder !== 'undefined' && typeof TextDecoder.prototype !== 'undefined' && TextDecoder.prototype.hasOwnProperty('encoding')
tmp['method']['decode'] = typeof TextDecoder !== 'undefined' && typeof TextDecoder.prototype !== 'undefined' && TextDecoder.prototype.hasOwnProperty('decode')
result['TextDecoder'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['encoding'] = typeof TextEncoder !== 'undefined' && typeof TextEncoder.prototype !== 'undefined' && TextEncoder.prototype.hasOwnProperty('encoding')
tmp['method']['encode'] = typeof TextEncoder !== 'undefined' && typeof TextEncoder.prototype !== 'undefined' && TextEncoder.prototype.hasOwnProperty('encode')
result['TextEncoder'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['width'] = typeof TextMetrics !== 'undefined' && typeof TextMetrics.prototype !== 'undefined' && TextMetrics.prototype.hasOwnProperty('width')
result['TextMetrics'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['mode'] = typeof TextTrack !== 'undefined' && typeof TextTrack.prototype !== 'undefined' && TextTrack.prototype.hasOwnProperty('mode')
result['TextTrack'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['TimeEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof TimeRanges !== 'undefined' && typeof TimeRanges.prototype !== 'undefined' && TimeRanges.prototype.hasOwnProperty('length')
tmp['method']['end'] = typeof TimeRanges !== 'undefined' && typeof TimeRanges.prototype !== 'undefined' && TimeRanges.prototype.hasOwnProperty('end')
tmp['method']['start'] = typeof TimeRanges !== 'undefined' && typeof TimeRanges.prototype !== 'undefined' && TimeRanges.prototype.hasOwnProperty('start')
result['TimeRanges'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['clientX'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('clientX')
tmp['property']['clientY'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('clientY')
tmp['property']['force'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('force')
tmp['property']['identifier'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('identifier')
tmp['property']['pageX'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('pageX')
tmp['property']['pageY'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('pageY')
tmp['property']['radiusX'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('radiusX')
tmp['property']['radiusY'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('radiusY')
tmp['property']['rotationAngle'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('rotationAngle')
tmp['property']['screenX'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('screenX')
tmp['property']['screenY'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('screenY')
tmp['property']['target'] = typeof Touch !== 'undefined' && typeof Touch.prototype !== 'undefined' && Touch.prototype.hasOwnProperty('target')
result['Touch'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['altKey'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('altKey')
tmp['property']['changedTouches'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('changedTouches')
tmp['property']['ctrlKey'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('ctrlKey')
tmp['property']['metaKey'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('metaKey')
tmp['property']['shiftKey'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('shiftKey')
tmp['property']['targetTouches'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('targetTouches')
tmp['property']['touches'] = typeof TouchEvent !== 'undefined' && typeof TouchEvent.prototype !== 'undefined' && TouchEvent.prototype.hasOwnProperty('touches')
result['TouchEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof TouchList !== 'undefined' && typeof TouchList.prototype !== 'undefined' && TouchList.prototype.hasOwnProperty('length')
tmp['method']['identifiedTouch'] = typeof TouchList !== 'undefined' && typeof TouchList.prototype !== 'undefined' && TouchList.prototype.hasOwnProperty('identifiedTouch')
tmp['method']['item'] = typeof TouchList !== 'undefined' && typeof TouchList.prototype !== 'undefined' && TouchList.prototype.hasOwnProperty('item')
result['TouchList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['byteStreamTrackID'] = typeof TrackDefault !== 'undefined' && typeof TrackDefault.prototype !== 'undefined' && TrackDefault.prototype.hasOwnProperty('byteStreamTrackID')
tmp['property']['kinds'] = typeof TrackDefault !== 'undefined' && typeof TrackDefault.prototype !== 'undefined' && TrackDefault.prototype.hasOwnProperty('kinds')
tmp['property']['label'] = typeof TrackDefault !== 'undefined' && typeof TrackDefault.prototype !== 'undefined' && TrackDefault.prototype.hasOwnProperty('label')
tmp['property']['language'] = typeof TrackDefault !== 'undefined' && typeof TrackDefault.prototype !== 'undefined' && TrackDefault.prototype.hasOwnProperty('language')
tmp['property']['type'] = typeof TrackDefault !== 'undefined' && typeof TrackDefault.prototype !== 'undefined' && TrackDefault.prototype.hasOwnProperty('type')
result['TrackDefault'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['length'] = typeof TrackDefaultList !== 'undefined' && typeof TrackDefaultList.prototype !== 'undefined' && TrackDefaultList.prototype.hasOwnProperty('length')
tmp['method']['TrackDefault'] = typeof TrackDefaultList !== 'undefined' && typeof TrackDefaultList.prototype !== 'undefined' && TrackDefaultList.prototype.hasOwnProperty('TrackDefault')
result['TrackDefaultList'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['Transferable'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['animationName'] = typeof TransitionEvent !== 'undefined' && typeof TransitionEvent.prototype !== 'undefined' && TransitionEvent.prototype.hasOwnProperty('animationName')
tmp['property']['elapsedTime'] = typeof TransitionEvent !== 'undefined' && typeof TransitionEvent.prototype !== 'undefined' && TransitionEvent.prototype.hasOwnProperty('elapsedTime')
tmp['property']['pseudoElement'] = typeof TransitionEvent !== 'undefined' && typeof TransitionEvent.prototype !== 'undefined' && TransitionEvent.prototype.hasOwnProperty('pseudoElement')
tmp['method']['initTransitionEvent'] = typeof TransitionEvent !== 'undefined' && typeof TransitionEvent.prototype !== 'undefined' && TransitionEvent.prototype.hasOwnProperty('initTransitionEvent')
result['TransitionEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['currentNode'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('currentNode')
tmp['property']['expandEntityReferences'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('expandEntityReferences')
tmp['property']['filter'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('filter')
tmp['property']['root'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('root')
tmp['property']['whatToShow'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('whatToShow')
tmp['method']['firstChild'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('firstChild')
tmp['method']['lastChild'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('lastChild')
tmp['method']['nextNode'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('nextNode')
tmp['method']['nextSibling'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('nextSibling')
tmp['method']['parentNode'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('parentNode')
tmp['method']['previousNode'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('previousNode')
tmp['method']['previousSibling'] = typeof TreeWalker !== 'undefined' && typeof TreeWalker.prototype !== 'undefined' && TreeWalker.prototype.hasOwnProperty('previousSibling')
result['TreeWalker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['TypeInfo'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['cancelBubble'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('cancelBubble')
tmp['property']['detail'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('detail')
tmp['property']['isChar'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('isChar')
tmp['property']['layerX'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('layerX')
tmp['property']['layerY'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('layerY')
tmp['property']['pageX'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('pageX')
tmp['property']['pageY'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('pageY')
tmp['property']['sourceCapabilities'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('sourceCapabilities')
tmp['property']['view'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('view')
tmp['method']['initUIEvent'] = typeof UIEvent !== 'undefined' && typeof UIEvent.prototype !== 'undefined' && UIEvent.prototype.hasOwnProperty('initUIEvent')
result['UIEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['origin'] = typeof URL !== 'undefined' && typeof URL.prototype !== 'undefined' && URL.prototype.hasOwnProperty('origin')
tmp['property']['searchParams'] = typeof URL !== 'undefined' && typeof URL.prototype !== 'undefined' && URL.prototype.hasOwnProperty('searchParams')
tmp['method']['createObjectURL'] = typeof URL !== 'undefined' && typeof URL.prototype !== 'undefined' && URL.prototype.hasOwnProperty('createObjectURL')
tmp['method']['revokeObjectURL'] = typeof URL !== 'undefined' && typeof URL.prototype !== 'undefined' && URL.prototype.hasOwnProperty('revokeObjectURL')
result['URL'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['append'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('append')
tmp['method']['delete'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('delete')
tmp['method']['entries'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('entries')
tmp['method']['get'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('get')
tmp['method']['getAll'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('getAll')
tmp['method']['has'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('has')
tmp['method']['keys'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('keys')
tmp['method']['set'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('set')
tmp['method']['toString'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('toString')
tmp['method']['values'] = typeof URLSearchParams !== 'undefined' && typeof URLSearchParams.prototype !== 'undefined' && URLSearchParams.prototype.hasOwnProperty('values')
result['URLSearchParams'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['hash'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('hash')
tmp['property']['host'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('host')
tmp['property']['hostname'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('hostname')
tmp['property']['href'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('href')
tmp['property']['origin'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('origin')
tmp['property']['pathname'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('pathname')
tmp['property']['port'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('port')
tmp['property']['protocol'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('protocol')
tmp['property']['search'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('search')
tmp['method']['toString'] = typeof URLUtilsReadOnly !== 'undefined' && typeof URLUtilsReadOnly.prototype !== 'undefined' && URLUtilsReadOnly.prototype.hasOwnProperty('toString')
result['URLUtilsReadOnly'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['USVString'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['UserDataHandler'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['near'] = typeof UserProximityEvent !== 'undefined' && typeof UserProximityEvent.prototype !== 'undefined' && UserProximityEvent.prototype.hasOwnProperty('near')
result['UserProximityEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['capabilities'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('capabilities')
tmp['property']['depthFar'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('depthFar')
tmp['property']['depthNear'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('depthNear')
tmp['property']['displayId'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('displayId')
tmp['property']['displayName'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('displayName')
tmp['property']['hardwareUnitId'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('hardwareUnitId')
tmp['property']['isConnected'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('isConnected')
tmp['property']['isPresenting'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('isPresenting')
tmp['property']['stageParameters'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('stageParameters')
tmp['method']['cancelAnimationFrame'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('cancelAnimationFrame')
tmp['method']['exitPresent'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('exitPresent')
tmp['method']['getEyeParameters'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('getEyeParameters')
tmp['method']['getFrameData'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('getFrameData')
tmp['method']['getImmediatePose'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('getImmediatePose')
tmp['method']['getLayers'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('getLayers')
tmp['method']['getPose'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('getPose')
tmp['method']['requestAnimationFrame'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('requestAnimationFrame')
tmp['method']['requestPresent'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('requestPresent')
tmp['method']['resetPose'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('resetPose')
tmp['method']['submitFrame'] = typeof VRDisplay !== 'undefined' && typeof VRDisplay.prototype !== 'undefined' && VRDisplay.prototype.hasOwnProperty('submitFrame')
result['VRDisplay'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['canPresent'] = typeof VRDisplayCapabilities !== 'undefined' && typeof VRDisplayCapabilities.prototype !== 'undefined' && VRDisplayCapabilities.prototype.hasOwnProperty('canPresent')
tmp['property']['hasExternalDisplay'] = typeof VRDisplayCapabilities !== 'undefined' && typeof VRDisplayCapabilities.prototype !== 'undefined' && VRDisplayCapabilities.prototype.hasOwnProperty('hasExternalDisplay')
tmp['property']['hasOrientation'] = typeof VRDisplayCapabilities !== 'undefined' && typeof VRDisplayCapabilities.prototype !== 'undefined' && VRDisplayCapabilities.prototype.hasOwnProperty('hasOrientation')
tmp['property']['hasPosition'] = typeof VRDisplayCapabilities !== 'undefined' && typeof VRDisplayCapabilities.prototype !== 'undefined' && VRDisplayCapabilities.prototype.hasOwnProperty('hasPosition')
tmp['property']['maxLayers'] = typeof VRDisplayCapabilities !== 'undefined' && typeof VRDisplayCapabilities.prototype !== 'undefined' && VRDisplayCapabilities.prototype.hasOwnProperty('maxLayers')
result['VRDisplayCapabilities'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['display'] = typeof VRDisplayEvent !== 'undefined' && typeof VRDisplayEvent.prototype !== 'undefined' && VRDisplayEvent.prototype.hasOwnProperty('display')
tmp['property']['reason'] = typeof VRDisplayEvent !== 'undefined' && typeof VRDisplayEvent.prototype !== 'undefined' && VRDisplayEvent.prototype.hasOwnProperty('reason')
result['VRDisplayEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['fieldOfView'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('fieldOfView')
tmp['property']['maximumFieldOfView'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('maximumFieldOfView')
tmp['property']['minimumFieldOfView'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('minimumFieldOfView')
tmp['property']['offset'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('offset')
tmp['property']['recommendedFieldOfView'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('recommendedFieldOfView')
tmp['property']['renderHeight'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('renderHeight')
tmp['property']['renderRect'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('renderRect')
tmp['property']['renderWidth'] = typeof VREyeParameters !== 'undefined' && typeof VREyeParameters.prototype !== 'undefined' && VREyeParameters.prototype.hasOwnProperty('renderWidth')
result['VREyeParameters'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['downDegrees'] = typeof VRFieldOfView !== 'undefined' && typeof VRFieldOfView.prototype !== 'undefined' && VRFieldOfView.prototype.hasOwnProperty('downDegrees')
tmp['property']['leftDegrees'] = typeof VRFieldOfView !== 'undefined' && typeof VRFieldOfView.prototype !== 'undefined' && VRFieldOfView.prototype.hasOwnProperty('leftDegrees')
tmp['property']['rightDegrees'] = typeof VRFieldOfView !== 'undefined' && typeof VRFieldOfView.prototype !== 'undefined' && VRFieldOfView.prototype.hasOwnProperty('rightDegrees')
tmp['property']['upDegrees'] = typeof VRFieldOfView !== 'undefined' && typeof VRFieldOfView.prototype !== 'undefined' && VRFieldOfView.prototype.hasOwnProperty('upDegrees')
result['VRFieldOfView'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['leftProjectionMatrix'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('leftProjectionMatrix')
tmp['property']['leftViewMatrix'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('leftViewMatrix')
tmp['property']['pose'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('pose')
tmp['property']['rightProjectionMatrix'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('rightProjectionMatrix')
tmp['property']['rightViewMatrix'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('rightViewMatrix')
tmp['property']['timestamp'] = typeof VRFrameData !== 'undefined' && typeof VRFrameData.prototype !== 'undefined' && VRFrameData.prototype.hasOwnProperty('timestamp')
result['VRFrameData'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['leftBounds'] = typeof VRLayerInit !== 'undefined' && typeof VRLayerInit.prototype !== 'undefined' && VRLayerInit.prototype.hasOwnProperty('leftBounds')
tmp['property']['rightBounds'] = typeof VRLayerInit !== 'undefined' && typeof VRLayerInit.prototype !== 'undefined' && VRLayerInit.prototype.hasOwnProperty('rightBounds')
tmp['property']['source'] = typeof VRLayerInit !== 'undefined' && typeof VRLayerInit.prototype !== 'undefined' && VRLayerInit.prototype.hasOwnProperty('source')
result['VRLayerInit'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['angularAcceleration'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('angularAcceleration')
tmp['property']['angularVelocity'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('angularVelocity')
tmp['property']['hasOrientation'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('hasOrientation')
tmp['property']['hasPosition'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('hasPosition')
tmp['property']['linearAcceleration'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('linearAcceleration')
tmp['property']['linearVelocity'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('linearVelocity')
tmp['property']['orientation'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('orientation')
tmp['property']['position'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('position')
tmp['property']['timestamp'] = typeof VRPose !== 'undefined' && typeof VRPose.prototype !== 'undefined' && VRPose.prototype.hasOwnProperty('timestamp')
result['VRPose'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['sittingToStandingTransform'] = typeof VRStageParameters !== 'undefined' && typeof VRStageParameters.prototype !== 'undefined' && VRStageParameters.prototype.hasOwnProperty('sittingToStandingTransform')
tmp['property']['sizeX'] = typeof VRStageParameters !== 'undefined' && typeof VRStageParameters.prototype !== 'undefined' && VRStageParameters.prototype.hasOwnProperty('sizeX')
tmp['property']['sizeY'] = typeof VRStageParameters !== 'undefined' && typeof VRStageParameters.prototype !== 'undefined' && VRStageParameters.prototype.hasOwnProperty('sizeY')
result['VRStageParameters'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['VTTCue'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['badInput'] = typeof ValidityState !== 'undefined' && typeof ValidityState.prototype !== 'undefined' && ValidityState.prototype.hasOwnProperty('badInput')
tmp['property']['tooLong'] = typeof ValidityState !== 'undefined' && typeof ValidityState.prototype !== 'undefined' && ValidityState.prototype.hasOwnProperty('tooLong')
result['ValidityState'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['corruptedVideoFrames'] = typeof VideoPlaybackQuality !== 'undefined' && typeof VideoPlaybackQuality.prototype !== 'undefined' && VideoPlaybackQuality.prototype.hasOwnProperty('corruptedVideoFrames')
tmp['property']['creationTime'] = typeof VideoPlaybackQuality !== 'undefined' && typeof VideoPlaybackQuality.prototype !== 'undefined' && VideoPlaybackQuality.prototype.hasOwnProperty('creationTime')
tmp['property']['droppedVideoFrames'] = typeof VideoPlaybackQuality !== 'undefined' && typeof VideoPlaybackQuality.prototype !== 'undefined' && VideoPlaybackQuality.prototype.hasOwnProperty('droppedVideoFrames')
tmp['property']['totalFrameDelay'] = typeof VideoPlaybackQuality !== 'undefined' && typeof VideoPlaybackQuality.prototype !== 'undefined' && VideoPlaybackQuality.prototype.hasOwnProperty('totalFrameDelay')
tmp['property']['totalVideoFrames'] = typeof VideoPlaybackQuality !== 'undefined' && typeof VideoPlaybackQuality.prototype !== 'undefined' && VideoPlaybackQuality.prototype.hasOwnProperty('totalVideoFrames')
result['VideoPlaybackQuality'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['height'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('height')
tmp['property']['offsetleft'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('offsetleft')
tmp['property']['offsetTop'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('offsetTop')
tmp['property']['pageLeft'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('pageLeft')
tmp['property']['pageTop'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('pageTop')
tmp['property']['scale'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('scale')
tmp['property']['width'] = typeof VisualViewport !== 'undefined' && typeof VisualViewport.prototype !== 'undefined' && VisualViewport.prototype.hasOwnProperty('width')
result['VisualViewport'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_color_buffer_float'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getSupportedProfiles'] = typeof WEBGL_compressed_texture_astc !== 'undefined' && typeof WEBGL_compressed_texture_astc.prototype !== 'undefined' && WEBGL_compressed_texture_astc.prototype.hasOwnProperty('getSupportedProfiles')
result['WEBGL_compressed_texture_astc'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_atc'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_etc'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_etc1'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_pvrtc'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_s3tc'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_compressed_texture_s3tc_srgb'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_debug_renderer_info'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['getTranslatedShaderSource'] = typeof WEBGL_debug_shaders !== 'undefined' && typeof WEBGL_debug_shaders.prototype !== 'undefined' && WEBGL_debug_shaders.prototype.hasOwnProperty('getTranslatedShaderSource')
result['WEBGL_debug_shaders'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WEBGL_depth_texture'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['drawBuffersWEBGL'] = typeof WEBGL_draw_buffers !== 'undefined' && typeof WEBGL_draw_buffers.prototype !== 'undefined' && WEBGL_draw_buffers.prototype.hasOwnProperty('drawBuffersWEBGL')
result['WEBGL_draw_buffers'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['loseContext'] = typeof WEBGL_lose_context !== 'undefined' && typeof WEBGL_lose_context.prototype !== 'undefined' && WEBGL_lose_context.prototype.hasOwnProperty('loseContext')
tmp['method']['restoreContext'] = typeof WEBGL_lose_context !== 'undefined' && typeof WEBGL_lose_context.prototype !== 'undefined' && WEBGL_lose_context.prototype.hasOwnProperty('restoreContext')
result['WEBGL_lose_context'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['curve'] = typeof WaveShaperNode !== 'undefined' && typeof WaveShaperNode.prototype !== 'undefined' && WaveShaperNode.prototype.hasOwnProperty('curve')
tmp['property']['oversample'] = typeof WaveShaperNode !== 'undefined' && typeof WaveShaperNode.prototype !== 'undefined' && WaveShaperNode.prototype.hasOwnProperty('oversample')
result['WaveShaperNode'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['beginQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('beginQuery')
tmp['method']['beginTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('beginTransformFeedback')
tmp['method']['bindBufferBase'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('bindBufferBase')
tmp['method']['bindBufferRange'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('bindBufferRange')
tmp['method']['bindSampler'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('bindSampler')
tmp['method']['bindTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('bindTransformFeedback')
tmp['method']['bindVertexArray'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('bindVertexArray')
tmp['method']['blitFramebuffer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('blitFramebuffer')
tmp['method']['clientWaitSync'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('clientWaitSync')
tmp['method']['compressedTexSubImage3D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('compressedTexSubImage3D')
tmp['method']['copyBufferSubData'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('copyBufferSubData')
tmp['method']['copyTexSubImage3D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('copyTexSubImage3D')
tmp['method']['createQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('createQuery')
tmp['method']['createSampler'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('createSampler')
tmp['method']['createTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('createTransformFeedback')
tmp['method']['createVertexArray'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('createVertexArray')
tmp['method']['deleteQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('deleteQuery')
tmp['method']['deleteSampler'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('deleteSampler')
tmp['method']['deleteSync'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('deleteSync')
tmp['method']['deleteTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('deleteTransformFeedback')
tmp['method']['deleteVertexArray'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('deleteVertexArray')
tmp['method']['drawArraysInstanced'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('drawArraysInstanced')
tmp['method']['drawBuffers'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('drawBuffers')
tmp['method']['drawElementsInstanced'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('drawElementsInstanced')
tmp['method']['drawRangeElements'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('drawRangeElements')
tmp['method']['endQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('endQuery')
tmp['method']['endTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('endTransformFeedback')
tmp['method']['fenceSync'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('fenceSync')
tmp['method']['framebufferTextureLayer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('framebufferTextureLayer')
tmp['method']['getActiveUniformBlockName'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getActiveUniformBlockName')
tmp['method']['getActiveUniformBlockParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getActiveUniformBlockParameter')
tmp['method']['getActiveUniforms'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getActiveUniforms')
tmp['method']['getBufferSubData'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getBufferSubData')
tmp['method']['getFragDataLocation'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getFragDataLocation')
tmp['method']['getIndexedParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getIndexedParameter')
tmp['method']['getInternalformatParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getInternalformatParameter')
tmp['method']['getQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getQuery')
tmp['method']['getQueryParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getQueryParameter')
tmp['method']['getSamplerParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getSamplerParameter')
tmp['method']['getSyncParameter'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getSyncParameter')
tmp['method']['getTransformFeedbackVarying'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getTransformFeedbackVarying')
tmp['method']['getUniformBlockIndex'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getUniformBlockIndex')
tmp['method']['getUniformIndices'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('getUniformIndices')
tmp['method']['invalidateFramebuffer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('invalidateFramebuffer')
tmp['method']['invalidateSubFramebuffer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('invalidateSubFramebuffer')
tmp['method']['isQuery'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('isQuery')
tmp['method']['isSampler'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('isSampler')
tmp['method']['isSync'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('isSync')
tmp['method']['isTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('isTransformFeedback')
tmp['method']['isVertexArray'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('isVertexArray')
tmp['method']['pauseTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('pauseTransformFeedback')
tmp['method']['readBuffer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('readBuffer')
tmp['method']['renderbufferStorageMultisample'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('renderbufferStorageMultisample')
tmp['method']['resumeTransformFeedback'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('resumeTransformFeedback')
tmp['method']['texImage3D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('texImage3D')
tmp['method']['texStorage2D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('texStorage2D')
tmp['method']['texStorage3D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('texStorage3D')
tmp['method']['texSubImage3D'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('texSubImage3D')
tmp['method']['transformFeedbackVaryings'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('transformFeedbackVaryings')
tmp['method']['uniformBlockBinding'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('uniformBlockBinding')
tmp['method']['vertexAttribDivisor'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('vertexAttribDivisor')
tmp['method']['vertexAttribIPointer'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('vertexAttribIPointer')
tmp['method']['waitSync'] = typeof WebGL2RenderingContext !== 'undefined' && typeof WebGL2RenderingContext.prototype !== 'undefined' && WebGL2RenderingContext.prototype.hasOwnProperty('waitSync')
result['WebGL2RenderingContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['name'] = typeof WebGLActiveInfo !== 'undefined' && typeof WebGLActiveInfo.prototype !== 'undefined' && WebGLActiveInfo.prototype.hasOwnProperty('name')
tmp['property']['size'] = typeof WebGLActiveInfo !== 'undefined' && typeof WebGLActiveInfo.prototype !== 'undefined' && WebGLActiveInfo.prototype.hasOwnProperty('size')
tmp['property']['type'] = typeof WebGLActiveInfo !== 'undefined' && typeof WebGLActiveInfo.prototype !== 'undefined' && WebGLActiveInfo.prototype.hasOwnProperty('type')
result['WebGLActiveInfo'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLBuffer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['statusMessage'] = typeof WebGLContextEvent !== 'undefined' && typeof WebGLContextEvent.prototype !== 'undefined' && WebGLContextEvent.prototype.hasOwnProperty('statusMessage')
result['WebGLContextEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLFramebuffer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLProgram'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLQuery'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLRenderbuffer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['canvas'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('canvas')
tmp['property']['drawingBufferHeight'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('drawingBufferHeight')
tmp['property']['drawingBufferWidth'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('drawingBufferWidth')
tmp['method']['activeTexture'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('activeTexture')
tmp['method']['attachShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('attachShader')
tmp['method']['bindAttribLocation'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bindAttribLocation')
tmp['method']['bindBuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bindBuffer')
tmp['method']['bindFramebuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bindFramebuffer')
tmp['method']['bindRenderbuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bindRenderbuffer')
tmp['method']['bindTexture'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bindTexture')
tmp['method']['blendColor'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('blendColor')
tmp['method']['blendEquation'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('blendEquation')
tmp['method']['blendEquationSeparate'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('blendEquationSeparate')
tmp['method']['blendFunc'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('blendFunc')
tmp['method']['blendFuncSeparate'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('blendFuncSeparate')
tmp['method']['bufferData'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bufferData')
tmp['method']['bufferSubData'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('bufferSubData')
tmp['method']['checkFramebufferStatus'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('checkFramebufferStatus')
tmp['method']['clear'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('clear')
tmp['method']['clearColor'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('clearColor')
tmp['method']['clearDepth'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('clearDepth')
tmp['method']['clearStencil'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('clearStencil')
tmp['method']['colorMask'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('colorMask')
tmp['method']['commit'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('commit')
tmp['method']['compileShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('compileShader')
tmp['method']['compressedTexSubImage2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('compressedTexSubImage2D')
tmp['method']['copyTexImage2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('copyTexImage2D')
tmp['method']['copyTexSubImage2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('copyTexSubImage2D')
tmp['method']['createBuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createBuffer')
tmp['method']['createFramebuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createFramebuffer')
tmp['method']['createProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createProgram')
tmp['method']['createRenderbuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createRenderbuffer')
tmp['method']['createShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createShader')
tmp['method']['createTexture'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('createTexture')
tmp['method']['cullFace'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('cullFace')
tmp['method']['deleteBuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteBuffer')
tmp['method']['deleteFramebuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteFramebuffer')
tmp['method']['deleteProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteProgram')
tmp['method']['deleteRenderbuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteRenderbuffer')
tmp['method']['deleteShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteShader')
tmp['method']['deleteTexture'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('deleteTexture')
tmp['method']['depthFunc'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('depthFunc')
tmp['method']['depthMask'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('depthMask')
tmp['method']['depthRange'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('depthRange')
tmp['method']['detachShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('detachShader')
tmp['method']['disable'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('disable')
tmp['method']['disableVertexAttribArray'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('disableVertexAttribArray')
tmp['method']['drawArrays'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('drawArrays')
tmp['method']['drawElements'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('drawElements')
tmp['method']['enable'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('enable')
tmp['method']['enableVertexAttribArray'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('enableVertexAttribArray')
tmp['method']['finish'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('finish')
tmp['method']['flush'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('flush')
tmp['method']['framebufferRenderbuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('framebufferRenderbuffer')
tmp['method']['framebufferTexture2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('framebufferTexture2D')
tmp['method']['frontFace'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('frontFace')
tmp['method']['generateMipmap'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('generateMipmap')
tmp['method']['getActiveAttrib'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getActiveAttrib')
tmp['method']['getActiveUniform'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getActiveUniform')
tmp['method']['getAttachedShaders'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getAttachedShaders')
tmp['method']['getAttribLocation'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getAttribLocation')
tmp['method']['getBufferParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getBufferParameter')
tmp['method']['getContextAttributes'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getContextAttributes')
tmp['method']['getError'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getError')
tmp['method']['getExtension'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getExtension')
tmp['method']['getFramebufferAttachmentParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getFramebufferAttachmentParameter')
tmp['method']['getParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getParameter')
tmp['method']['getProgramInfoLog'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getProgramInfoLog')
tmp['method']['getProgramParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getProgramParameter')
tmp['method']['getRenderbufferParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getRenderbufferParameter')
tmp['method']['getShaderInfoLog'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getShaderInfoLog')
tmp['method']['getShaderParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getShaderParameter')
tmp['method']['getShaderPrecisionFormat'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getShaderPrecisionFormat')
tmp['method']['getShaderSource'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getShaderSource')
tmp['method']['getSupportedExtensions'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getSupportedExtensions')
tmp['method']['getTexParameter'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getTexParameter')
tmp['method']['getUniform'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getUniform')
tmp['method']['getUniformLocation'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getUniformLocation')
tmp['method']['getVertexAttrib'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getVertexAttrib')
tmp['method']['getVertexAttribOffset'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('getVertexAttribOffset')
tmp['method']['hint'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('hint')
tmp['method']['isBuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isBuffer')
tmp['method']['isContextLost'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isContextLost')
tmp['method']['isEnabled'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isEnabled')
tmp['method']['isFramebuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isFramebuffer')
tmp['method']['isProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isProgram')
tmp['method']['isRenderbuffer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isRenderbuffer')
tmp['method']['isShader'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isShader')
tmp['method']['isTexture'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('isTexture')
tmp['method']['lineWidth'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('lineWidth')
tmp['method']['linkProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('linkProgram')
tmp['method']['pixelStorei'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('pixelStorei')
tmp['method']['polygonOffset'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('polygonOffset')
tmp['method']['readPixels'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('readPixels')
tmp['method']['renderbufferStorage'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('renderbufferStorage')
tmp['method']['sampleCoverage'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('sampleCoverage')
tmp['method']['scissor'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('scissor')
tmp['method']['shaderSource'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('shaderSource')
tmp['method']['stencilFunc'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilFunc')
tmp['method']['stencilFuncSeparate'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilFuncSeparate')
tmp['method']['stencilMask'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilMask')
tmp['method']['stencilMaskSeparate'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilMaskSeparate')
tmp['method']['stencilOp'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilOp')
tmp['method']['stencilOpSeparate'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('stencilOpSeparate')
tmp['method']['texImage2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('texImage2D')
tmp['method']['texSubImage2D'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('texSubImage2D')
tmp['method']['useProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('useProgram')
tmp['method']['validateProgram'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('validateProgram')
tmp['method']['vertexAttribPointer'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('vertexAttribPointer')
tmp['method']['viewport'] = typeof WebGLRenderingContext !== 'undefined' && typeof WebGLRenderingContext.prototype !== 'undefined' && WebGLRenderingContext.prototype.hasOwnProperty('viewport')
result['WebGLRenderingContext'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLSampler'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLShader'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['precision'] = typeof WebGLShaderPrecisionFormat !== 'undefined' && typeof WebGLShaderPrecisionFormat.prototype !== 'undefined' && WebGLShaderPrecisionFormat.prototype.hasOwnProperty('precision')
tmp['property']['rangeMax'] = typeof WebGLShaderPrecisionFormat !== 'undefined' && typeof WebGLShaderPrecisionFormat.prototype !== 'undefined' && WebGLShaderPrecisionFormat.prototype.hasOwnProperty('rangeMax')
tmp['property']['rangeMin'] = typeof WebGLShaderPrecisionFormat !== 'undefined' && typeof WebGLShaderPrecisionFormat.prototype !== 'undefined' && WebGLShaderPrecisionFormat.prototype.hasOwnProperty('rangeMin')
result['WebGLShaderPrecisionFormat'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLSync'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLTexture'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLTransformFeedback'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLUniformLocation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebGLVertexArrayObject'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebSocket'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['WebSockets_API'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['deltaMode'] = typeof WheelEvent !== 'undefined' && typeof WheelEvent.prototype !== 'undefined' && WheelEvent.prototype.hasOwnProperty('deltaMode')
tmp['property']['deltaX'] = typeof WheelEvent !== 'undefined' && typeof WheelEvent.prototype !== 'undefined' && WheelEvent.prototype.hasOwnProperty('deltaX')
tmp['property']['deltaY'] = typeof WheelEvent !== 'undefined' && typeof WheelEvent.prototype !== 'undefined' && WheelEvent.prototype.hasOwnProperty('deltaY')
tmp['property']['deltaZ'] = typeof WheelEvent !== 'undefined' && typeof WheelEvent.prototype !== 'undefined' && WheelEvent.prototype.hasOwnProperty('deltaZ')
result['WheelEvent'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['applicationCache'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('applicationCache')
tmp['property']['caches'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('caches')
tmp['property']['closed'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('closed')
tmp['property']['console'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('console')
tmp['property']['controllers'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('controllers')
tmp['property']['crypto'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('crypto')
tmp['property']['customElements'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('customElements')
tmp['property']['defaultStatus'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('defaultStatus')
tmp['property']['devicePixelRatio'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('devicePixelRatio')
tmp['property']['dialogArguments'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('dialogArguments')
tmp['property']['directories'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('directories')
tmp['property']['document'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('document')
tmp['property']['frameElement'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('frameElement')
tmp['property']['frames'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('frames')
tmp['property']['fullScreen'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('fullScreen')
tmp['property']['history'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('history')
tmp['property']['indexedDB'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('indexedDB')
tmp['property']['innerHeight'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('innerHeight')
tmp['property']['innerWidth'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('innerWidth')
tmp['property']['isSecureContext'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('isSecureContext')
tmp['property']['isSecureContext'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('isSecureContext')
tmp['property']['length'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('length')
tmp['property']['localStorage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('localStorage')
tmp['property']['location'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('location')
tmp['property']['locationbar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('locationbar')
tmp['property']['menubar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('menubar')
tmp['property']['mozAnimationStartTime'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('mozAnimationStartTime')
tmp['property']['mozInnerScreenX'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('mozInnerScreenX')
tmp['property']['mozInnerScreenY'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('mozInnerScreenY')
tmp['property']['mozPaintCount'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('mozPaintCount')
tmp['property']['name'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('name')
tmp['property']['navigator'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('navigator')
tmp['property']['onabort'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onabort')
tmp['property']['onafterprint'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onafterprint')
tmp['property']['onanimationcancel'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onanimationcancel')
tmp['property']['onanimationend'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onanimationend')
tmp['property']['onanimationiteration'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onanimationiteration')
tmp['property']['onappinstalled'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onappinstalled')
tmp['property']['onauxclick'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onauxclick')
tmp['property']['onbeforeinstallprompt'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onbeforeinstallprompt')
tmp['property']['onbeforeprint'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onbeforeprint')
tmp['property']['onbeforeunload'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onbeforeunload')
tmp['property']['onblur'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onblur')
tmp['property']['onchange'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onchange')
tmp['property']['onclick'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onclose')
tmp['property']['oncontextmenu'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('oncontextmenu')
tmp['property']['ondblclick'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondblclick')
tmp['property']['ondevicelight'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondevicelight')
tmp['property']['ondevicemotion'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondevicemotion')
tmp['property']['ondeviceorientation'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondeviceorientation')
tmp['property']['ondeviceorientationabsolute'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondeviceorientationabsolute')
tmp['property']['ondeviceproximity'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondeviceproximity')
tmp['property']['ondragdrop'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ondragdrop')
tmp['property']['onerror'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onerror')
tmp['property']['onfocus'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onfocus')
tmp['property']['ongamepadconnected'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ongamepadconnected')
tmp['property']['ongamepaddisconnected'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ongamepaddisconnected')
tmp['property']['ongotpointercapture'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ongotpointercapture')
tmp['property']['onhashchange'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onhashchange')
tmp['property']['oninput'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('oninput')
tmp['property']['onkeydown'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onkeydown')
tmp['property']['onkeypress'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onkeypress')
tmp['property']['onkeyup'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onkeyup')
tmp['property']['onlanguagechange'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onlanguagechange')
tmp['property']['onload'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onload')
tmp['property']['onloadend'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onloadend')
tmp['property']['onloadstart'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onloadstart')
tmp['property']['onlostpointercapture'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onlostpointercapture')
tmp['property']['onmessage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmessageerror')
tmp['property']['onmousedown'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmousedown')
tmp['property']['onmousemove'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmousemove')
tmp['property']['onmouseout'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmouseout')
tmp['property']['onmouseover'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmouseover')
tmp['property']['onmouseup'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmouseup')
tmp['property']['onmozbeforepaint'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onmozbeforepaint')
tmp['property']['onpaint'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpaint')
tmp['property']['onpointercancel'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointercancel')
tmp['property']['onpointerdown'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerdown')
tmp['property']['onpointerenter'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerenter')
tmp['property']['onpointerleave'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerleave')
tmp['property']['onpointermove'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointermove')
tmp['property']['onpointerout'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerout')
tmp['property']['onpointerover'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerover')
tmp['property']['onpointerup'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpointerup')
tmp['property']['onpopstate'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onpopstate')
tmp['property']['onrejectionhandled'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onrejectionhandled')
tmp['property']['onreset'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onreset')
tmp['property']['onresize'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onresize')
tmp['property']['onscroll'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onscroll')
tmp['property']['onselect'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onselect')
tmp['property']['onselectionchange'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onselectionchange')
tmp['property']['onselectstart'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onselectstart')
tmp['property']['onstorage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onstorage')
tmp['property']['onsubmit'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onsubmit')
tmp['property']['ontouchcancel'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ontouchcancel')
tmp['property']['ontouchmove'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ontouchmove')
tmp['property']['ontouchstart'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ontouchstart')
tmp['property']['ontransitioncancel'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ontransitioncancel')
tmp['property']['ontransitionend'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('ontransitionend')
tmp['property']['onunhandledrejection'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onunhandledrejection')
tmp['property']['onunload'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onunload')
tmp['property']['onuserproximity'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onuserproximity')
tmp['property']['onvrdisplayactivate'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplayactivate')
tmp['property']['onvrdisplayblur'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplayblur')
tmp['property']['onvrdisplayconnect'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplayconnect')
tmp['property']['onvrdisplaydeactivate'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplaydeactivate')
tmp['property']['onvrdisplaydisconnect'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplaydisconnect')
tmp['property']['onvrdisplayfocus'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplayfocus')
tmp['property']['onvrdisplaypresentchange'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onvrdisplaypresentchange')
tmp['property']['onwheel'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('onwheel')
tmp['property']['opener'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('opener')
tmp['property']['origin'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('origin')
tmp['property']['outerHeight'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('outerHeight')
tmp['property']['outerWidth'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('outerWidth')
tmp['property']['pageYOffset'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('pageYOffset')
tmp['property']['parent'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('parent')
tmp['property']['performance'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('performance')
tmp['property']['personalbar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('personalbar')
tmp['property']['pkcs11'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('pkcs11')
tmp['property']['screen'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('screen')
tmp['property']['screenX'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('screenX')
tmp['property']['screenY'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('screenY')
tmp['property']['scrollbars'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollbars')
tmp['property']['scrollMaxX'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollMaxX')
tmp['property']['scrollMaxY'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollMaxY')
tmp['property']['scrollX'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollX')
tmp['property']['scrollY'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollY')
tmp['property']['self'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('self')
tmp['property']['sessionStorage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('sessionStorage')
tmp['property']['sidebar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('sidebar')
tmp['property']['speechSynthesis'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('speechSynthesis')
tmp['property']['status'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('status')
tmp['property']['statusbar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('statusbar')
tmp['property']['toolbar'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('toolbar')
tmp['property']['top'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('top')
tmp['property']['URL'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('URL')
tmp['property']['visualViewport'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('visualViewport')
tmp['property']['window'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('window')
tmp['method']['alert'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('alert')
tmp['method']['atob'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('atob')
tmp['method']['back'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('back')
tmp['method']['blur'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('blur')
tmp['method']['btoa'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('btoa')
tmp['method']['cancelAnimationFrame'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('cancelAnimationFrame')
tmp['method']['cancelIdleCallback'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('cancelIdleCallback')
tmp['method']['captureEvents'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('captureEvents')
tmp['method']['clearImmediate'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('clearImmediate')
tmp['method']['clearInterval'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('clearInterval')
tmp['method']['clearTimeout'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('clearTimeout')
tmp['method']['close'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('close')
tmp['method']['confirm'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('confirm')
tmp['method']['convertPointFromNodeToPage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('convertPointFromNodeToPage')
tmp['method']['convertPointFromPageToNode'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('convertPointFromPageToNode')
tmp['method']['createImageBitmap'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('createImageBitmap')
tmp['method']['dump'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('dump')
tmp['method']['event'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('event')
tmp['method']['fetch'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('fetch')
tmp['method']['find'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('find')
tmp['method']['focus'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('focus')
tmp['method']['forward'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('forward')
tmp['method']['getAttention'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('getAttention')
tmp['method']['getComputedStyle'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('getComputedStyle')
tmp['method']['getDefaultComputedStyle'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('getDefaultComputedStyle')
tmp['method']['getSelection'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('getSelection')
tmp['method']['home'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('home')
tmp['method']['matchMedia'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('matchMedia')
tmp['method']['minimize'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('minimize')
tmp['method']['moveBy'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('moveBy')
tmp['method']['moveTo'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('moveTo')
tmp['method']['open'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('open')
tmp['method']['openDialog'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('openDialog')
tmp['method']['postMessage'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('postMessage')
tmp['method']['print'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('print')
tmp['method']['prompt'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('prompt')
tmp['method']['releaseEvents'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('releaseEvents')
tmp['method']['requestAnimationFrame'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('requestAnimationFrame')
tmp['method']['requestFileSystem'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('requestFileSystem')
tmp['method']['requestIdleCallback'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('requestIdleCallback')
tmp['method']['resizeBy'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('resizeBy')
tmp['method']['resizeTo'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('resizeTo')
tmp['method']['restore'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('restore')
tmp['method']['routeEvent'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('routeEvent')
tmp['method']['scroll'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scroll')
tmp['method']['scrollBy'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollBy')
tmp['method']['scrollByLines'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollByLines')
tmp['method']['scrollByPages'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollByPages')
tmp['method']['scrollTo'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('scrollTo')
tmp['method']['setCursor'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('setCursor')
tmp['method']['setImmediate'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('setImmediate')
tmp['method']['setInterval'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('setInterval')
tmp['method']['setTimeout'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('setTimeout')
tmp['method']['showModalDialog'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('showModalDialog')
tmp['method']['sizeToContent'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('sizeToContent')
tmp['method']['stop'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('stop')
tmp['method']['updateCommands'] = typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined' && Window.prototype.hasOwnProperty('updateCommands')
result['Window'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['focused'] = typeof WindowClient !== 'undefined' && typeof WindowClient.prototype !== 'undefined' && WindowClient.prototype.hasOwnProperty('focused')
tmp['property']['visibilityState'] = typeof WindowClient !== 'undefined' && typeof WindowClient.prototype !== 'undefined' && WindowClient.prototype.hasOwnProperty('visibilityState')
tmp['method']['focus'] = typeof WindowClient !== 'undefined' && typeof WindowClient.prototype !== 'undefined' && WindowClient.prototype.hasOwnProperty('focus')
tmp['method']['navigate'] = typeof WindowClient !== 'undefined' && typeof WindowClient.prototype !== 'undefined' && WindowClient.prototype.hasOwnProperty('navigate')
result['WindowClient'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onafterprint'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onafterprint')
tmp['property']['onbeforeprint'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onbeforeprint')
tmp['property']['onbeforeunload'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onbeforeunload')
tmp['property']['onhashchange'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onhashchange')
tmp['property']['onlanguagechange'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onlanguagechange')
tmp['property']['onmessage'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onmessageerror')
tmp['property']['onpopstate'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onpopstate')
tmp['property']['onrejectionhandled'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onrejectionhandled')
tmp['property']['onstorage'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onstorage')
tmp['property']['onunhandledrejection'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onunhandledrejection')
tmp['property']['onunload'] = typeof WindowEventHandlers !== 'undefined' && typeof WindowEventHandlers.prototype !== 'undefined' && WindowEventHandlers.prototype.hasOwnProperty('onunload')
result['WindowEventHandlers'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['caches'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('caches')
tmp['property']['indexedDB'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('indexedDB')
tmp['property']['isSecureContext'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('isSecureContext')
tmp['property']['origin'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('origin')
tmp['method']['atob'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('atob')
tmp['method']['btoa'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('btoa')
tmp['method']['clearInterval'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('clearInterval')
tmp['method']['clearTimeout'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('clearTimeout')
tmp['method']['createImageBitmap'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('createImageBitmap')
tmp['method']['fetch'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('fetch')
tmp['method']['setInterval'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('setInterval')
tmp['method']['setTimeout'] = typeof WindowOrWorkerGlobalScope !== 'undefined' && typeof WindowOrWorkerGlobalScope.prototype !== 'undefined' && WindowOrWorkerGlobalScope.prototype.hasOwnProperty('setTimeout')
result['WindowOrWorkerGlobalScope'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof Worker !== 'undefined' && typeof Worker.prototype !== 'undefined' && Worker.prototype.hasOwnProperty('onerror')
tmp['property']['onmessage'] = typeof Worker !== 'undefined' && typeof Worker.prototype !== 'undefined' && Worker.prototype.hasOwnProperty('onmessage')
tmp['property']['onmessageerror'] = typeof Worker !== 'undefined' && typeof Worker.prototype !== 'undefined' && Worker.prototype.hasOwnProperty('onmessageerror')
tmp['method']['postMessage'] = typeof Worker !== 'undefined' && typeof Worker.prototype !== 'undefined' && Worker.prototype.hasOwnProperty('postMessage')
tmp['method']['terminate'] = typeof Worker !== 'undefined' && typeof Worker.prototype !== 'undefined' && Worker.prototype.hasOwnProperty('terminate')
result['Worker'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['caches'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('caches')
tmp['property']['console'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('console')
tmp['property']['indexedDB'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('indexedDB')
tmp['property']['isSecureContext'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('isSecureContext')
tmp['property']['location'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('location')
tmp['property']['navigator'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('navigator')
tmp['property']['onclose'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('onclose')
tmp['property']['onerror'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('onerror')
tmp['property']['onlanguagechange'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('onlanguagechange')
tmp['property']['onoffline'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('onoffline')
tmp['property']['ononline'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('ononline')
tmp['property']['origin'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('origin')
tmp['property']['performance'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('performance')
tmp['property']['self'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('self')
tmp['method']['atob'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('atob')
tmp['method']['btoa'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('btoa')
tmp['method']['clearInterval'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('clearInterval')
tmp['method']['clearTimeout'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('clearTimeout')
tmp['method']['close'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('close')
tmp['method']['createImageBitmap'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('createImageBitmap')
tmp['method']['dump'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('dump')
tmp['method']['fetch'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('fetch')
tmp['method']['importScripts'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('importScripts')
tmp['method']['setInterval'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('setInterval')
tmp['method']['setTimeout'] = typeof WorkerGlobalScope !== 'undefined' && typeof WorkerGlobalScope.prototype !== 'undefined' && WorkerGlobalScope.prototype.hasOwnProperty('setTimeout')
result['WorkerGlobalScope'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['hash'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('hash')
tmp['property']['host'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('host')
tmp['property']['hostname'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('hostname')
tmp['property']['href'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('href')
tmp['property']['origin'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('origin')
tmp['property']['pathname'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('pathname')
tmp['property']['port'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('port')
tmp['property']['protocol'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('protocol')
tmp['property']['search'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('search')
tmp['method']['toString'] = typeof WorkerLocation !== 'undefined' && typeof WorkerLocation.prototype !== 'undefined' && WorkerLocation.prototype.hasOwnProperty('toString')
result['WorkerLocation'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['appCodeName'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('appCodeName')
tmp['property']['appName'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('appName')
tmp['property']['appVersion'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('appVersion')
tmp['property']['connection'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('connection')
tmp['property']['language'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('language')
tmp['property']['languages'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('languages')
tmp['property']['onLine'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('onLine')
tmp['property']['permissions'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('permissions')
tmp['property']['platform'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('platform')
tmp['property']['product'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('product')
tmp['property']['userAgent'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('userAgent')
tmp['method']['sendBeacon'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('sendBeacon')
tmp['method']['taintEnabled'] = typeof WorkerNavigator !== 'undefined' && typeof WorkerNavigator.prototype !== 'undefined' && WorkerNavigator.prototype.hasOwnProperty('taintEnabled')
result['WorkerNavigator'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['addModule'] = typeof Worklet !== 'undefined' && typeof Worklet.prototype !== 'undefined' && Worklet.prototype.hasOwnProperty('addModule')
result['Worklet'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['locked'] = typeof WritableStream !== 'undefined' && typeof WritableStream.prototype !== 'undefined' && WritableStream.prototype.hasOwnProperty('locked')
tmp['method']['abort'] = typeof WritableStream !== 'undefined' && typeof WritableStream.prototype !== 'undefined' && WritableStream.prototype.hasOwnProperty('abort')
tmp['method']['getWriter'] = typeof WritableStream !== 'undefined' && typeof WritableStream.prototype !== 'undefined' && WritableStream.prototype.hasOwnProperty('getWriter')
result['WritableStream'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['error'] = typeof WritableStreamDefaultController !== 'undefined' && typeof WritableStreamDefaultController.prototype !== 'undefined' && WritableStreamDefaultController.prototype.hasOwnProperty('error')
result['WritableStreamDefaultController'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['closed'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('closed')
tmp['property']['desiredSize'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('desiredSize')
tmp['method']['abort'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('abort')
tmp['method']['close'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('close')
tmp['method']['ready'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('ready')
tmp['method']['releaseLock'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('releaseLock')
tmp['method']['write'] = typeof WritableStreamDefaultWriter !== 'undefined' && typeof WritableStreamDefaultWriter.prototype !== 'undefined' && WritableStreamDefaultWriter.prototype.hasOwnProperty('write')
result['WritableStreamDefaultWriter'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onerror'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('onerror')
tmp['property']['onload'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('onload')
tmp['property']['onprogress'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('onprogress')
tmp['property']['ontimeout'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('ontimeout')
tmp['property']['responseText'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('responseText')
tmp['property']['timeout'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('timeout')
tmp['method']['abort'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('abort')
tmp['method']['open'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('open')
tmp['method']['send'] = typeof XDomainRequest !== 'undefined' && typeof XDomainRequest.prototype !== 'undefined' && XDomainRequest.prototype.hasOwnProperty('send')
result['XDomainRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['method']['load'] = typeof XMLDocument !== 'undefined' && typeof XMLDocument.prototype !== 'undefined' && XMLDocument.prototype.hasOwnProperty('load')
result['XMLDocument'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['channel'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('channel')
tmp['property']['mozAnon'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('mozAnon')
tmp['property']['mozBackgroundRequest'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('mozBackgroundRequest')
tmp['property']['mozResponseArrayBuffer'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('mozResponseArrayBuffer')
tmp['property']['mozSystem'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('mozSystem')
tmp['property']['multipart'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('multipart')
tmp['property']['onreadystatechange'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('onreadystatechange')
tmp['property']['readyState'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('readyState')
tmp['property']['response'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('response')
tmp['property']['responseText'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('responseText')
tmp['property']['responseType'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('responseType')
tmp['property']['responseURL'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('responseURL')
tmp['property']['responseXML'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('responseXML')
tmp['property']['status'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('status')
tmp['property']['statusText'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('statusText')
tmp['property']['timeout'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('timeout')
tmp['property']['upload'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('upload')
tmp['property']['withCredentials'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('withCredentials')
tmp['method']['abort'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('abort')
tmp['method']['getAllResponseHeaders'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('getAllResponseHeaders')
tmp['method']['getResponseHeader'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('getResponseHeader')
tmp['method']['open'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('open')
tmp['method']['openRequest'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('openRequest')
tmp['method']['overrideMimeType'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('overrideMimeType')
tmp['method']['send'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('send')
tmp['method']['sendAsBinary'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('sendAsBinary')
tmp['method']['setRequestHeader'] = typeof XMLHttpRequest !== 'undefined' && typeof XMLHttpRequest.prototype !== 'undefined' && XMLHttpRequest.prototype.hasOwnProperty('setRequestHeader')
result['XMLHttpRequest'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['onabort'] = typeof XMLHttpRequestEventTarget !== 'undefined' && typeof XMLHttpRequestEventTarget.prototype !== 'undefined' && XMLHttpRequestEventTarget.prototype.hasOwnProperty('onabort')
tmp['property']['onerror'] = typeof XMLHttpRequestEventTarget !== 'undefined' && typeof XMLHttpRequestEventTarget.prototype !== 'undefined' && XMLHttpRequestEventTarget.prototype.hasOwnProperty('onerror')
tmp['property']['onload'] = typeof XMLHttpRequestEventTarget !== 'undefined' && typeof XMLHttpRequestEventTarget.prototype !== 'undefined' && XMLHttpRequestEventTarget.prototype.hasOwnProperty('onload')
tmp['property']['onloadstart'] = typeof XMLHttpRequestEventTarget !== 'undefined' && typeof XMLHttpRequestEventTarget.prototype !== 'undefined' && XMLHttpRequestEventTarget.prototype.hasOwnProperty('onloadstart')
tmp['property']['onprogress'] = typeof XMLHttpRequestEventTarget !== 'undefined' && typeof XMLHttpRequestEventTarget.prototype !== 'undefined' && XMLHttpRequestEventTarget.prototype.hasOwnProperty('onprogress')
result['XMLHttpRequestEventTarget'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['XMLHttpRequestResponseType'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['XMLSerializer'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['XPathExpression'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['XPathResult'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
result['XSLTProcessor'] = tmp
tmp = {}
tmp['property'] = {}
tmp['method'] = {}
tmp['property']['actions'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('actions')
tmp['property']['badge'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('badge')
tmp['property']['body'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('body')
tmp['property']['data'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('data')
tmp['property']['dir'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('dir')
tmp['property']['icon'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('icon')
tmp['property']['image'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('image')
tmp['property']['lang'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('lang')
tmp['property']['noscreen'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('noscreen')
tmp['property']['onclick'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('onclick')
tmp['property']['onclose'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('onclose')
tmp['property']['onerror'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('onerror')
tmp['property']['onshow'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('onshow')
tmp['property']['permission'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('permission')
tmp['property']['renotify'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('renotify')
tmp['property']['requireInteraction'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('requireInteraction')
tmp['property']['silent'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('silent')
tmp['property']['sound'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('sound')
tmp['property']['tag'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('tag')
tmp['property']['timestamp'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('timestamp')
tmp['property']['title'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('title')
tmp['method']['close'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('close')
tmp['method']['requestPermission'] = typeof notification !== 'undefined' && typeof notification.prototype !== 'undefined' && notification.prototype.hasOwnProperty('requestPermission')
result['notification'] = tmp
if (navigator.userAgent.match(/Chrome\/\d+/)) {
    result['UA'] = navigator.userAgent.match(/Chrome\/\d+/)[0]
} else if (navigator.userAgent.match(/Firefox\/\d+/)) {
    result['UA'] = navigator.userAgent.match(/Firefox\/\d+/)[0]
} else {
    // Chrome/FF以外は知らない
    result['UA'] = `Unknown -> ${navigator.userAgent}`
}

// fetch('http://localhost:28000', {
fetch('http://host.docker.internal:28000', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(result),
});

console.log(result);

document.title = 'Finished';
