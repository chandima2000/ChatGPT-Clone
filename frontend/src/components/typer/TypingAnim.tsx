import { TypeAnimation } from 'react-type-animation'

export const TypingAnim1 = () => {
  return (
    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Chat with Your Own AI. ',
    1000,
    'Built With OPEN AI',
    2000,
    'Your Own Customized ChatGPT',
    1500,
    
  ]}
  speed={50}
  style={{ 
    fontSize: '60px',
    color:"white",
    display:"inline-block",
    textShadow:"1px 1px 20px #000"    }}
  repeat={Infinity}
/>
  )
}

export const TypingAnim2 = () =>{
    return(
        <TypeAnimation
            sequence={["Let's Get Start.", 1000,]}
            speed={30}
            style={{ fontSize: '30px', color:"black", display:"inline-block", fontWeight:"bold" }}
            repeat={Infinity}
        />
    )
}


