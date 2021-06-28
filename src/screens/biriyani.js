
import React, {useState} from "react";
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView,Modal,Button} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const biriyani = ({navigation}) =>
{
    const [fmodal, setfmodal] = useState(false)
    const [smodal, setsmodal] = useState(false)
    const [tmodal, settmodal] = useState(false)
    const [fomodal, setfomodal] = useState(false)
    const [fimodal, setfimodal] = useState(false)
    return (
        
      <View style={{backgroundColor:"#f7f2f2",}}>
        {/* 1st MODAL ADDED............................................ */}
        <Modal   transparent={true} visible ={fmodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/1cknbiriyani.jpg")}></Image>
      
      <View style={{left:"5%",position:"absolute",top:"70%"}}>
      <View style={{flexDirection:"row",}}>
        <Image style={{height:20,width:20,}} source={require('../assets/nonveg.png')}></Image>
        <Entypo name="star" size={20} color="darkorange"style={{marginLeft:"1%"}} ></Entypo> 
        <Text style={{color:"darkorange",marginLeft:"1%"}}>BEST SELLER</Text>
        <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10,
                marginLeft:"38%",
                width:"20%"
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize:17,fontWeight:"800"}}>Chicken Biriyani</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:"1%",position:"absolute",bottom:"-78%",alignItems:"center",}}>
         <FontAwesome name="rupee" size={20} color="gray"  style={{}} ></FontAwesome>
          <Text style={{fontSize:18}}> 150 </Text>
      </View>
      </View>
    
      </View>
     
     </Modal>
 
        {/* 2nd modal........ */}

        <Modal   transparent={true} visible ={smodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setsmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/3hdrcknbrn.jpg")}></Image>
      
      <View style={{left:"5%",position:"absolute",top:"70%"}}>
      <View style={{flexDirection:"row",}}>
        <Image style={{height:20,width:20,}} source={require('../assets/nonveg.png')}></Image>
        <Entypo name="star" size={20} color="darkorange"style={{marginLeft:"1%"}} ></Entypo> 
        <Text style={{color:"darkorange",marginLeft:"1%"}}>BEST SELLER</Text>
        <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10,
                marginLeft:"38%",
                width:"20%"
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize:17,fontWeight:"800"}}>Chicken Biriyani</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:"1%",position:"absolute",bottom:"-78%",alignItems:"center",}}>
         <FontAwesome name="rupee" size={20} color="gray"  style={{}} ></FontAwesome>
          <Text style={{fontSize:18}}> 150 </Text>
      </View>
      </View>
    
      </View>
     
     </Modal>
 
        {/* 3rd modal.... */}
        <Modal   transparent={true} visible ={tmodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> settmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/bfrbn.jpg")}></Image>
      
      <View style={{left:"5%",position:"absolute",top:"70%"}}>
      <View style={{flexDirection:"row",}}>
        <Image style={{height:20,width:20,}} source={require('../assets/nonveg.png')}></Image>
        <Entypo name="star" size={20} color="darkorange"style={{marginLeft:"1%"}} ></Entypo> 
        <Text style={{color:"darkorange",marginLeft:"1%"}}>BEST SELLER</Text>
        <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10,
                marginLeft:"38%",
                width:"20%"
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize:17,fontWeight:"800"}}>Chicken Biriyani</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:"1%",position:"absolute",bottom:"-78%",alignItems:"center",}}>
         <FontAwesome name="rupee" size={20} color="gray"  style={{}} ></FontAwesome>
          <Text style={{fontSize:18}}> 150 </Text>
      </View>
      </View>
    
      </View>
     
     </Modal>
 

         {/* 4th modal.... */}
         <Modal   transparent={true} visible ={fomodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfomodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/2hdrbrn.jpg")}></Image>
      
      <View style={{left:"5%",position:"absolute",top:"70%"}}>
      <View style={{flexDirection:"row",}}>
        <Image style={{height:20,width:20,}} source={require('../assets/nonveg.png')}></Image>
        <Entypo name="star" size={20} color="darkorange"style={{marginLeft:"1%"}} ></Entypo> 
        <Text style={{color:"darkorange",marginLeft:"1%"}}>BEST SELLER</Text>
        <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10,
                marginLeft:"38%",
                width:"20%"
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize:17,fontWeight:"800"}}>Chicken Biriyani</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:"1%",position:"absolute",bottom:"-78%",alignItems:"center",}}>
         <FontAwesome name="rupee" size={20} color="gray"  style={{}} ></FontAwesome>
          <Text style={{fontSize:18}}> 150 </Text>
      </View>
      </View>
    
      </View>
     
     </Modal>
 
         {/* 5th modal.... */}
         <Modal   transparent={true} visible ={fimodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfimodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/bfb1.jpg")}></Image>
      
      <View style={{left:"5%",position:"absolute",top:"70%"}}>
      <View style={{flexDirection:"row",}}>
        <Image style={{height:20,width:20,}} source={require('../assets/nonveg.png')}></Image>
        <Entypo name="star" size={20} color="darkorange"style={{marginLeft:"1%"}} ></Entypo> 
        <Text style={{color:"darkorange",marginLeft:"1%"}}>BEST SELLER</Text>
        <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10,
                marginLeft:"38%",
                width:"20%"
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize:17,fontWeight:"800"}}>Chicken Biriyani</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:"1%",position:"absolute",bottom:"-78%",alignItems:"center",}}>
         <FontAwesome name="rupee" size={20} color="gray"  style={{}} ></FontAwesome>
          <Text style={{fontSize:18}}> 150 </Text>
      </View>
      </View>
    
      </View>
     
     </Modal>
        
       <View style={{backgroundColor:"white",}}>
        <TextInput style={styles.search}
          placeholder="   Search for restaurents and food">
       </TextInput>

        {/* starting resand dishes...................................... */}

      <View style={{flexDirection: "row",}}>
        <TouchableOpacity>
          <Text style={styles.hotels}>
            Restaurents
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.dishes}>
             Dishes
          </Text>
        </TouchableOpacity>
     </View>   
    </View>

    {/* taping names like veg, nin-veg etc................. */}
      <ScrollView horizontal = {true} style={{backgroundColor:"white",height:"12%", marginTop: 1,flexDirection:"row"}}>
        <TouchableOpacity onPress={() => {navigation.navigate('Veg')}} >
          <Text style={styles.veg} >
            Veg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('nonVeg')}} >
          <Text style={styles.nonveg} >
            Non-Veg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {navigation.navigate('rs100tors250')}}>
          <Text style={styles.btwn} >
            Rs 100-Rs 250
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style= {styles.rs} >
            Rs 250+
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.lesthan} >
            Less than 30mins
          </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style= {styles.rated} >
            Rated 4+
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* pictures started............................ ..........................................................*/}

      <ScrollView style={{marginTop:11}}>
      <ScrollView style={{marginBottom:"100%",marginTop:"-25%"}}>
      <View style={{backgroundColor:"white", marginTop:11}}>
          <Image style={{height:20,width:20,top:"32%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"27%",left:"14%",fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35.5%",left:22,}} >{'  '}150</Text>
           <Entypo name="star" size={17} color="darkorange" style={{top:"17.7%",left:"10%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray" style={{left:"5%",top:"26.9%"}}></FontAwesome>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Chicken Biriyani{'\n'}
          </Text>
          <TouchableOpacity onPress ={()=> setfmodal(true)}>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:110}}source={require('../assets/1cknbiriyani.jpg')}></Image>
          </TouchableOpacity>
          <View style={{marginLeft:"-31%",marginTop:"32%",width:"25%"}}>
            <TouchableOpacity >
              <Text style={{backgroundColor:"white",fontWeight:"bold",color:"green",borderColor:"gray",
              textAlign:"center",fontSize:20,paddingTop:"1%",paddingBottom:"1%",
              borderWidth:1,borderRadius:10}}>ADD</Text>
            </TouchableOpacity>
            </View>
       </View>
       
       <Text style={{top:5,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold",top:"16%"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300",marginLeft:"4%"}}>50% off | Use WELCOMEE60</Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"10%"}}></MaterialCommunityIcons>
          
          </View>
        </TouchableOpacity>
        </View>

        <View style={{backgroundColor:"white",marginTop:"3%"}}>
<View style={{marginTop:"-24%"}}>
          <Image style={{height:20,width:20,top:"32%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"27%",left:"14%",fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35.5%",left:22,}} >{'  '}150</Text>
           <Entypo name="star" size={17} color="darkorange" style={{top:"17.7%",left:"10%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray" style={{left:"5%",top:"26.9%"}}></FontAwesome>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Chicken Biriyani{'\n'}
          </Text>
          <TouchableOpacity onPress ={()=> setsmodal (true)}>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:110}}source={require('../assets/3hdrcknbrn.jpg')}></Image>
          </TouchableOpacity>
          <View style={{marginLeft:"-31%",marginTop:"32%",width:"25%"}}>
            <TouchableOpacity >
              <Text style={{backgroundColor:"white",fontWeight:"bold",color:"green",borderColor:"gray",
              textAlign:"center",fontSize:20,paddingTop:"1%",paddingBottom:"1%",
              borderWidth:1,borderRadius:10}}>ADD</Text>
            </TouchableOpacity>
            </View>
       </View>
       
       <Text style={{top:5,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold",top:"16%"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300",marginLeft:"4%"}}>50% off | Use WELCOMEE60</Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"10%"}}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        </View>
        </View>


        <View style={{backgroundColor:"white",marginTop:"3%"}}>
<View style={{marginTop:"-24%"}}>
          <Image style={{height:20,width:20,top:"32%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"27%",left:"14%",fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35.5%",left:22,}} >{'  '}150</Text>
           <Entypo name="star" size={17} color="darkorange" style={{top:"17.7%",left:"10%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray" style={{left:"5%",top:"26.9%"}}></FontAwesome>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Chicken Biriyani{'\n'}
          </Text>
          <TouchableOpacity onPress ={()=> settmodal (true)}>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:110}}source={require('../assets/bfrbn.jpg')}></Image>
          </TouchableOpacity>
          <View style={{marginLeft:"-31%",marginTop:"32%",width:"25%"}}>
            <TouchableOpacity >
              <Text style={{backgroundColor:"white",fontWeight:"bold",color:"green",borderColor:"gray",
              textAlign:"center",fontSize:20,paddingTop:"1%",paddingBottom:"1%",
              borderWidth:1,borderRadius:10}}>ADD</Text>
            </TouchableOpacity>
            </View>
       </View>
       
       <Text style={{top:5,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold",top:"16%"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300",marginLeft:"4%"}}>50% off | Use WELCOMEE60</Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"10%"}}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        </View>
        </View>

       <View style={{backgroundColor:"white",marginTop:"3%"}}>
<View style={{marginTop:"-24%"}}>
          <Image style={{height:20,width:20,top:"32%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"27%",left:"14%",fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35.5%",left:22,}} >{'  '}150</Text>
           <Entypo name="star" size={17} color="darkorange" style={{top:"17.7%",left:"10%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray" style={{left:"5%",top:"26.9%"}}></FontAwesome>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Chicken Biriyani{'\n'}
          </Text>
          <TouchableOpacity  onPress ={()=> setfomodal (true)}>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:110}}source={require('../assets/2hdrbrn.jpg')}></Image>
          </TouchableOpacity>
          <View style={{marginLeft:"-31%",marginTop:"32%",width:"25%"}}>
            <TouchableOpacity >
              <Text style={{backgroundColor:"white",fontWeight:"bold",color:"green",borderColor:"gray",
              textAlign:"center",fontSize:20,paddingTop:"1%",paddingBottom:"1%",
              borderWidth:1,borderRadius:10}}>ADD</Text>
            </TouchableOpacity>
            </View>
       </View>
       
       <Text style={{top:5,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold",top:"16%"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300",marginLeft:"4%"}}>50% off | Use WELCOMEE60</Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"10%"}}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        </View>
        </View>
         
        <View style={{backgroundColor:"white",marginTop:"3%"}}>
<View style={{marginTop:"-24%"}}>
          <Image style={{height:20,width:20,top:"32%",left:16}} source={require('../assets/nonveg.png')}></Image>
           <Text style={{top:"27%",left:"14%",fontSize:14,color:"orange"}} > BEST SELLER</Text>
           <Text style={{top:"35.5%",left:22,}} >{'  '}150</Text>
           <Entypo name="star" size={17} color="darkorange" style={{top:"17.7%",left:"10%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray" style={{left:"5%",top:"26.9%"}}></FontAwesome>
         
           
       <View style={{flexDirection:"row",}}>
          <Text style={{left:18,alignSelf:"center",fontWeight:"bold", fontSize:15,fontStyle:"normal",paddingTop:8}}>
            Chicken Biriyani{'\n'}
          </Text>
          <TouchableOpacity onPress ={()=> setfimodal (true)}>
          <Image style={{borderRadius:20,height:135,width:150, marginTop:10,marginBottom:20, marginLeft:110}}source={require('../assets/bfb1.jpg')}></Image>
          </TouchableOpacity>
          <View style={{marginLeft:"-31%",marginTop:"32%",width:"25%"}}>
            <TouchableOpacity >
              <Text style={{backgroundColor:"white",fontWeight:"bold",color:"green",borderColor:"gray",
              textAlign:"center",fontSize:20,paddingTop:"1%",paddingBottom:"1%",
              borderWidth:1,borderRadius:10}}>ADD</Text>
            </TouchableOpacity>
            </View>
       </View>

       <Text style={{top:5,textAlign:"center",color:"lightgray"}}>....................................................................................................</Text>

        <TouchableOpacity>
          <View style={{marginLeft:"4%",flexDirection:"row",paddingTop:"5%"}}> 
          <Text style={{color:"gray"}}>From</Text>
          <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
          {/* Orange star icon and rupee icon add... */}
          </View>
          <View style={{paddingLeft:"4%",backgroundColor:"white",marginBottom:40}}>
          {/* addd black star and rupee icon'''''''''''' */}
          <Text style={{color:"gray", fontWeight:"bold",top:"16%"}}>2.8   28 mins   rs 200 for two</Text>
          {/* add animated offer %  icon in orange color */}
          <Text style={{top:20,color:"gray", fontWeight:"300",marginLeft:"4%"}}>50% off | Use WELCOMEE60</Text>
          <MaterialCommunityIcons name="brightness-percent" size={13} color="darkorange" style={{top:"10%"}}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
     </ScrollView>
    </View>
   
  )
}

const styles =  StyleSheet.create
(
{

  modalView: {
    
    
    
    flex:1,
    justifyContent:"center",
 
 
    },
  search:
  {
    marginTop:15,
    paddingTop:13,
    alignSelf:"center",
   borderWidth:1,
   width:"95%",
   borderRadius:3,
  textAlign:"left",
   fontWeight:"600",
   borderColor:"lightgray",
   fontSize:20,
  },

  hotels:
  {
    padding:15, 
     paddingTop:8,
     paddingBottom:8,
      marginLeft:18,
      marginTop:30, 
     marginBottom:30,
     borderWidth:1, 
     borderRadius:20, 
     borderColor:"lightgray",
     fontWeight:"bold",
     fontSize:13,
     textAlign:"center",
      width:"90%",
     
 },
 veg:
 {
  borderWidth:1,
  marginTop:20,
  width:40,
  height:30,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  marginLeft:20,
  borderColor:"lightgray",
  fontWeight:"300"
  },
 nonveg:
 {
  borderWidth:1,
  marginTop:20,
  width:70,
  height:30,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  marginLeft:10,
  fontWeight:"300",
  borderColor:"lightgray"
  },
  btwn:
  {
    borderWidth:1,
    marginTop:20,
    width:110,
    height:30,
    borderRadius:5,
    padding:6,
    paddingLeft:12,
    marginLeft:10,
    fontWeight:"300",
    borderColor:"lightgray"
    },
  dishes:
  {                    
      padding:15, 
      paddingTop:8,
      paddingBottom:8,
       marginLeft:18,
       marginTop:30, 
      marginBottom:30,
      borderWidth:1, 
      borderRadius:20, 
      borderColor:"gray",
      fontWeight:"bold",
      fontSize:13,
      textAlign:"center",
       width:"90%",
        backgroundColor:"black",
        color:"white"
        
    },
    rs:
    {
      borderWidth:1,
      marginLeft:10,
      marginTop:20,
      height:30,
      width:63,
      borderRadius:5,
      fontWeight:"300",
      textAlign:"center",
      paddingTop:5,
      paddingLeft:3,
      borderColor:"lightgray"
      },
    lesthan:
    {
      borderWidth:1,
      marginTop:20,
      width:130,
      height:30,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      marginLeft:10,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      },

    rated:
    {
      borderWidth:1,
      marginTop:20,
      width:80,
      height:30,
      marginRight:13,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      marginLeft:10,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      }
}
)
export default biriyani;

