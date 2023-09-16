import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 

function Verifydeli({state}){
    const params = useParams();
    const { contract } = state;
  const imgId = params.imgId;
  console.log(imgId);
  const [detail, setDetail] = useState("");
  const [detail1, setDetail1] = useState("");
  
  useEffect(() => {
    if (!contract || !imgId) {
      return; // Exit if contract or userId is not available
    }

    async function getDetail() {
      try {
        const nameText = await contract.methods.Product_Array(imgId).call();
        const nameText1 = await contract.methods.getProduct(imgId).call();
        console.log(nameText);
        console.log(nameText1);
        console.log(imgId);
        setDetail(nameText); // Assuming 'img' is the property you want to retrieve
        setDetail1(nameText1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getDetail();
  }, [contract, imgId]);

  const getCheckedValues = async() => {
    const { contract, web3 } = state;
        console.log(web3)
        const accounts = await web3.eth.getAccounts();
        await contract.methods
          .delivery(imgId)
          .send({ from: accounts[0] });
        console.log("Hii");
  }

    return(
        <>
       
<div
  style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '400px', // Adjust the maximum width as needed
  }}
>
  <div>
    <h3 className="vertical-timeline-element-title">
      PRODUCT NAME : {detail1[1]}
    </h3>
  </div>
  <div>
    <h3 className="vertical-timeline-element-title">
      PRODUCT DESCRIPTION : {detail[2]}
    </h3>
  </div>
  <div>
    <h3 className="vertical-timeline-element-title">
      PRODUCT PRICE : {detail[3]}
    </h3>
  </div>
</div>



        
  <VerticalTimeline style={{ background: "#5f8e98" }}>
  <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        style={{ position: 'relative' }} // Add relative positioning
      >
        
    <h3 className="vertical-timeline-element-title">PHASE</h3>
    <h3 className="vertical-timeline-element-title">{detail[2]}</h3>
        <br></br>
    <h3 className="vertical-timeline-element-title">Manufacturer ADDRESS:</h3>
    <h3 className="vertical-timeline-element-title">{detail[4]}</h3>
        <br></br>
    <h4 className="vertical-timeline-element-subtitle">PRICE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[3]}</h4>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">STAGE</h4>
    <h4 className="vertical-timeline-element-subtitle">{detail[7] === "0" ? "Manufacturing Stage" : detail[7]}</h4>
    
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        

      </VerticalTimelineElement>
  </VerticalTimeline>

  <button
          style={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer"
          }}
          onClick={getCheckedValues}
        >
          DELIVER
        </button>
  </>
  
    )
    
}
 
export default Verifydeli;
