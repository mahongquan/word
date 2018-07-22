import React from 'react';
import sprintf from 'sprintf';
let ipcRenderer;
if (window.require) {
  ipcRenderer = require('electron').ipcRenderer; //
}
class Card1 extends React.Component{
  render=()=>{
  	return(<div style={{width:"210mm",height:"148mm",backgroudColor:"green"}}>
	        <p style={{marginTop:"90px",fontSize:"20px"}} align="center">
	            <font face="SimHei">北京科技大学预收款凭条&emsp;&emsp;&emsp;No&emsp;0018{this.props.start}</font>
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
    this.state={
        start:1,
        num:1,
    }
    if (ipcRenderer) {
      ipcRenderer.on('print', () => {
        console.log("print");
      });
    }
  }
  onClick=()=>{
    console.log("click");
    ipcRenderer.send('print', {});
  }
  onChange=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({start:start});
  }
  onChange_num=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({num:start});
  }

  render(){
    let start=this.state.start;
    let pages=[];
    for(var i=0;i<this.state.num;i++){
        let str_start=sprintf("%04d",start);
        pages.push(<div key={i} className="sheet">
        <Card1 start={str_start} />
        <Card1 start={str_start} />
    </div>);
        start+=1;
    }
	return (
<div>
  <div className="only_screen">
    <label>起始号码</label><input value={this.state.start} onChange={this.onChange}></input>
    <label>页数</label><input value={this.state.num} onChange={this.onChange_num}></input>
    <button  onClick={this.onClick}>打印</button>
  </div>
  <div className="A4">
    {pages}
  </div>
</div>);
    }
}
export default E1;