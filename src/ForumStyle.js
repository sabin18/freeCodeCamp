export const style={

ForumTopic : {
    
    backgroundColor: '#F7F5FC',
    border: '3px solid #a4e092',
    borderRadius:'0.75em',
    overflow: 'hidden',
    boxShadow: '0 1px 1px 0 rgba(240, 240, 240, 0.05)',
    marginBottom: '0.6em',

},
 StyledTetx : {

backgroundColor: '#F7F5FC',
fontSize:'10px',
paddingTop:'12px',
paddingLeft:'10px',

},
 TopicField : {

borderRight: '2px solid #a4e092',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',

},
 Rank :  {
width: '3em',
fontWeight: '500',
color: '#449',
backgroundColor: '#28C93D',
'a:hover': {
backgroundColor: 'yellow',
}

},
 Title : {
display: 'inline-block',
alignItems: 'center',
justifyContent: 'flex-start',
flexGrow: '1',
hover:'#f9f9f9'

},


 Link : {
display: 'flex',
flexDirection:'row',
alignItems: 'center',
justifyContent: 'flex-start',
width: '100%',
height: '100%',
padding: '0.7em 1em',
fontWeight:'900',
fontFamily: 'Times New Roman', 
fontSize:'1em',
textDecoration:'none',
color: '#333',

'&:hover': {
backgroundcolor: 'rgb(220,220,220)',

}
} ,
 Avatar : {
display: 'flex',
alignItems: 'center',
},
 UserLink : {
height:'calc(1.5em + 4px)',
padding: '0 0.5px',
},
 UserImage : {
width:'1.5em',
height:'1.5em',
borderRadius: '50%',
border: '3px solid #F7F5FC',
},
 Posters : {
  borderRight: '2px solid #F0F0F0',
  display: 'flex',
  alignItems: 'center',
  fontWeight:'500',
  color: '#444',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '8.5em',
  padding: '0 5px',
  fontSize: '1.15em',

},

 Count : {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
width: '4.5em',
color: '#555',
fontWeight:'bold',
},

}

// export default style;