import React from 'react';
let ipcRenderer;
if (window.require) {
  ipcRenderer = require('electron').ipcRenderer; //
}
class Card1 extends React.Component{
  render=()=>{
  	return(<div style={{width:"210mm",height:"148mm",backgroudColor:"green"}}>
	        <p style={{marginTop:"90px",fontSize:"20px"}} align="center">
	            <font face="SimHei">北京科技大学预收款凭条&emsp;&emsp;&emsp;No&emsp;00180035</font>
            </p>
			<p  style={{margin:"60px 0 0 100px"}}>今收到
			<input type="text" name="name" id="textfield" 
				style={{width:"130mm"
					,border:"none",borderBottom:"1px solid #000"}} />
			</p>
			<p  style={{margin:"10px 0 0 100px"}}>
			    <span>交&emsp;来</span>
			    <input type="text" name="name" id="textfield" 
			    style={{width:"130mm",border:"none",
			    borderBottom:"1px solid #000"}} />
			</p>
			<p  style={{margin:"10px 0 0 100px"}}>
			    <span>人民币（大写）</span>
			    <input type="text" name="name" id="textfield" 
			    style={{width:"54mm",border:"none",borderBottom:"1px solid #000"}} />
			    <span>￥</span>
			    <input type="text" name="name" id="textfield" 
			    style={{width:"52mm",border:"none",borderBottom:"1px solid #000"}} />
			</p>
			<div style={{height:"2em"}}></div>
			<p  style={{margin:"10px 0 0 100px"}}>
			    <span>收款单位</span>
			    <span style={{margin:"0 0 0 38mm"}}>收款人</span>
			</p>
			<p  style={{margin:"10px 0 0 100px"}}>
			    <span>(公章)</span>
			    <input type="text" name="name" id="textfield" 
			    style={{border:"none",borderBottom:"1px solid #000"}} />
			    <span >(签章)</span>
			    <input type="text" name="name" id="textfield" 
			    style={{border:"none",borderBottom:"1px solid #000"}} />
			    <span >&emsp;&emsp;&emsp;年&emsp;月&emsp;日</span>
			 </p>
		</div>);
  }
}
class E1 extends React.Component{
  constructor() {
    super();
    if (ipcRenderer) {
      ipcRenderer.on('print', () => {
        console.log("print");
      });
    }
  }
	render(){
	 	return (
<div className="A4">
    <div className="sheet">
        <Card1 />
        <Card1 />
    </div>
</div>);
    }
}
export default E1;