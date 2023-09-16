import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 

function Verify({state}){
    const params = useParams();
    const { contract } = state;
  const imgId = params.imgId;
  console.log(imgId);
  const [detail, setDetail] = useState("");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [from, setfrom] = useState("");
  // const [detail1, setDetail1] = useState([]);
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const nameText = await contract.methods
      .getAllProducts()
      .call();
      console.log(nameText[0]);
      setname(nameText[0][1]);
      setdesc(nameText[0][2]);
      setprice(nameText[0][3]);
      setfrom(nameText[0][4]);
      console.log(nameText[0][4]);
      setDetail(nameText[0]);
    };
    contract && getDetail();
  }, [state]);
    return(
    <VerticalTimeline style={{ background: "#5f8e98" }}>
  {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        style={{ position: 'relative' }} // Add relative positioning
      >
    
       
    <h3 className="vertical-timeline-element-title">PHASE </h3>
    <h3 className="vertical-timeline-element-title">{detail[0]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">STAGE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[7] === "0" ? "Manufacturing Stage" : detail[7]}</h4>
    
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">PRODUCT NAME :</h3>
    <h3 className="vertical-timeline-element-title">{detail[1]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail1[1]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">TIME</h4>
    <h4 className="vertical-timeline-element-subtitle">{new Date(detail1[2] * 1000).toLocaleString()}</h4>
    
  </VerticalTimelineElement> */}
  <h1>{name}</h1>
  <h1>{desc}</h1>
  <h1>{price}</h1>
  <h1>{from[0]}</h1>
  </VerticalTimeline>
    )
    
}
 
export default Verify;
