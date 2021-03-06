// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package imagine.imageOperations.engine.instructions
{
	import imagine.imageOperations.engine.BitmapReference;
	import imagine.imageOperations.engine.OpStateMachine;
	
	public class PopInstruction extends OpInstruction
	{
		private var _nSkipBack:Number;
		private var _nPop:Number;
		
		public function PopInstruction(nSkipBack:Number=0, nPop:Number=1)
		{
			_nSkipBack = nSkipBack;
			_nPop = nPop;
			key = _nSkipBack.toString() + "|" + _nPop.toString();
		}
		
		override public function Execute(opsmc:OpStateMachine):void {
			Pop(opsmc, _nSkipBack, _nPop);
		}
	}
}