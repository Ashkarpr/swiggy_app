import React, {useState} from "react";
import { View,Text, TextInput,StyleSheet,Image,TouchableOpacity, ScrollView,Modal,Button} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Assets } from "@react-navigation/stack";

const rs100tors250 =({navigation})=> 
{
    const [fmodal, setfmodal] = useState(false)
    const [smodal, setsmodal] = useState(false)
    const [tmodal, settmodal] = useState(false)
    const [fomodal, setfomodal] = useState(false)
    const [fimodal, setfimodal] = useState(false)
    const [add , setadd] =useState("ADD")
    
    return (
    
    <View style={{justifyContent:"center",alignItems:"center",width:"100%"}}>

{/*...................1st modal...........................  */}

    <Modal  transparent={true} visible ={fmodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",borderRadius:12,paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white"}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/nvbiriyani4.jpg")}></Image>
      
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

{/*...................2nd modal...........................  */}

<Modal  transparent={true} visible ={smodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setsmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{borderRadius:12,position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white"}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/nvbiriyani1.jpg")}></Image>
      
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

{/*...................3rd modal...........................  */}

<Modal   transparent={true} visible ={tmodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> settmodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/nvbiriyani2.jpg")}></Image>
      
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

{/*...................4th modal...........................  */}

<Modal   transparent={true} visible ={fomodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfomodal (false)}>  
    
    </TouchableOpacity>
    <View style={{position:"absolute",width:"100%",height:"50%",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",bottom:0,backgroundColor:"white",borderRadius:12}}>
        
           
      
        <Image  style={{height:"60%",width:"100%",borderRadius:10,}} source={require("../assets/nvbiriyani5.jpg")}></Image>
      
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

 {/*...................5th modal...........................  */}

 <Modal   transparent={true} visible ={fimodal} animationType ="slide">
    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.8)',height:"60%",}} onPress ={()=> setfimodal (false)}>  
    
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
          
       
        <View style={{backgroundColor:"white",width:"100%",justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.search}
          placeholder="   Search for restaurents and food">
       </TextInput>
 {/*........... starting resand dishes...................................... */}
        <View style={{flexDirection:"row",backgroundColor:"white",width:"100%",alignItems:"center"}}>
            <TouchableOpacity>
                <Text style={styles.hotels}>
                    Restaurants
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.dishes}>
                    Dishes
                </Text>
            </TouchableOpacity>
        </View>
  </View>
{/*.................... Veg, NonVeg etc.............................. */}
  <ScrollView horizontal={true}style={{backgroundColor:"white",width:"100%", height:"10%",marginTop: 1}}>
      <View style={{flexDirection:"row",alignItems:"center",}}>
       <TouchableOpacity onPress={() => {navigation.navigate('biriyani')}} style={{ width:130,height:30,marginLeft:10,}}>
           <Text style={styles.btwn}>
               Rs 100-RS 250
           </Text>
           <EvilIcons name="close" size={20} color="black" style={{marginLeft:"80%",marginTop:"-17%"}}></EvilIcons>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {navigation.navigate('Veg')}}style={{ width:40,height:30,marginLeft:10,}}>
           <Text style={styles.veg}>
              Veg
           </Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => {navigation.navigate('nonVeg')}}  style={{width:70,height:30,marginLeft:10}}>
           <Text style={styles.nonveg}>
             Non-Veg
           </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{ width:130,height:30,marginLeft:10}}>
           <Text style={styles.lesthan}>
             Less than 30mins
           </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{width:80,height:30,marginLeft:10}}>
          <Text style= {styles.rated} >
            Rated 4+
          </Text>
        </TouchableOpacity>
    </View>
  </ScrollView>

{/*................ PICTURES STARTED..........................
....................1sT biriyani pic..........................*/}
<ScrollView  style={{width:"100%"}}>
 <ScrollView style={{marginBottom:"100%",marginTop:11,backgroundColor:"#cdd1ce"}}>

    <View style={{backgroundColor:"white",}}>
        <View style={{alignItems:"center",flexDirection:"row",}}>
        <Image style={{height:20,width:20,marginLeft:9}} source={require('../assets/nonveg.png')}></Image> 
        <Entypo name="star" size={20} color="darkorange" ></Entypo> 
        <Text style={{color:"darkorange"}}>
            BEST SELLER
        </Text>
        <TouchableOpacity onPress ={()=> setfmodal (true)}>
            <Image style={{
                borderRadius:20,
                height:135,
                width:150,
                marginLeft:"26%"
                }}source={require('../assets/nvbiriyani4.jpg')}>
            </Image>
        </TouchableOpacity>

        <View style={{marginLeft:"-38%",width:"20%"}}>
            <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10
                ,marginTop:"170%",
                
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> hi </Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={{marginLeft:"2%",}}>      
         <Text style={{ marginTop:"-17%",color:"black",fontWeight:"bold",fontSize:17}}>
                Chicken Biriyani
          </Text>      
        </View>
        <View style={{flexDirection:"row",marginLeft:"3%"}}> 
            <FontAwesome name="rupee" size={20} color="gray"  style={{marginTop:"-10%"}} ></FontAwesome>
            <Text style={{marginTop:"-11%",fontSize:18}}>
                150
            </Text>
         </View>
         <View style={{marginTop:"-2%"}}>
                <Text style={{textAlign:"center",color:"lightgray"}}>
     ......................................................................................................
                </Text>
         </View>
         <TouchableOpacity>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
            <Text style={{color:"gray"}}>
                From
            </Text>
         <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
         </View>
          <View  style={{flexDirection:"row",marginTop:"1%",marginLeft:"3%"}}>
          <Entypo name="star" size={17} color="gray"></Entypo>
           <Text style={{color:"gray",marginLeft:"1%"}}>2.8 </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <Text style={{color:"gray"}}>28mins </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray"  style={{marginTop:"1%"}} ></FontAwesome>
           <Text style={{color:"gray"}}>150 for two </Text>     
         </View>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
          <MaterialCommunityIcons name="brightness-percent" size={15} color="darkorange" style={{}}></MaterialCommunityIcons>
          <Text style={{marginLeft:"1%",marginTop:"-.5%",color:"gray"}}>50% off | Use WELCOMEE67</Text>
         </View>
         </TouchableOpacity>  
         </View> 
             
{/*..................2nd biriyani pic.................... */}

<View style={{backgroundColor:"white",marginTop:"5%"}}>
<View style={{alignItems:"center",flexDirection:"row",}}>
        <Image style={{height:20,width:20,marginLeft:9}} source={require('../assets/nonveg.png')}></Image> 
        <Entypo name="star" size={20} color="darkorange" ></Entypo> 
        <Text style={{color:"darkorange"}}>
            BEST SELLER
        </Text>
        <TouchableOpacity onPress ={()=> setsmodal (true)}>
            <Image style={{
                borderRadius:20,
                height:135,
                width:150,
                marginLeft:"26%"
                }}source={require('../assets/nvbiriyani1.jpg')}>
            </Image>
        </TouchableOpacity>

        <View style={{marginLeft:"-38%",width:"20%"}}>
            <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10
                ,marginTop:"170%",
                
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={{marginLeft:"2%",}}>      
         <Text style={{ marginTop:"-17%",color:"black",fontWeight:"bold",fontSize:17}}>
                Chicken Biriyani
          </Text>      
        </View>
        <View style={{flexDirection:"row",marginLeft:"3%"}}> 
            <FontAwesome name="rupee" size={20} color="gray"  style={{marginTop:"-10%"}} ></FontAwesome>
            <Text style={{marginTop:"-11%",fontSize:18}}>
                100
            </Text>
         </View>
         <View style={{marginTop:"-2%"}}>
                <Text style={{textAlign:"center",color:"lightgray"}}>
     ......................................................................................................
                </Text>
         </View>
         <TouchableOpacity>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
            <Text style={{color:"gray"}}>
                From
            </Text>
         <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
         </View>
          <View  style={{flexDirection:"row",marginTop:"1%",marginLeft:"3%"}}>
          <Entypo name="star" size={17} color="gray"></Entypo>
           <Text style={{color:"gray",marginLeft:"1%"}}>2.8 </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <Text style={{color:"gray"}}>28mins </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray"  style={{marginTop:"1%"}} ></FontAwesome>
           <Text style={{color:"gray"}}>150 for two </Text>     
         </View>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
          <MaterialCommunityIcons name="brightness-percent" size={15} color="darkorange" style={{}}></MaterialCommunityIcons>
          <Text style={{marginLeft:"1%",marginTop:"-.5%",color:"gray"}}>50% off | Use WELCOMEE67</Text>
         </View>
         </TouchableOpacity>
         </View> 
{/*...................3rd pic................................ */}
<View style={{backgroundColor:"white",marginTop:"5%"}}>
<View style={{alignItems:"center",flexDirection:"row",}}>
        <Image style={{height:20,width:20,marginLeft:9}} source={require('../assets/nonveg.png')}></Image> 
        <Entypo name="star" size={20} color="darkorange" ></Entypo> 
        <Text style={{color:"darkorange"}}>
            BEST SELLER
        </Text>
        <TouchableOpacity onPress ={()=> settmodal (true)}>
            <Image style={{
                borderRadius:20,
                height:135,
                width:150,
                marginLeft:"26%"
                }}source={require('../assets/nvbiriyani2.jpg')}>
            </Image>
        </TouchableOpacity>

        <View style={{marginLeft:"-38%",width:"20%"}}>
            <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10
                ,marginTop:"170%",
                
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={{marginLeft:"2%",}}>      
         <Text style={{ marginTop:"-17%",color:"black",fontWeight:"bold",fontSize:17}}>
                Chicken Biriyani
          </Text>      
        </View>
        <View style={{flexDirection:"row",marginLeft:"3%"}}> 
            <FontAwesome name="rupee" size={20} color="gray"  style={{marginTop:"-10%"}} ></FontAwesome>
            <Text style={{marginTop:"-11%",fontSize:18}}>
                200
            </Text>
         </View>
         <View style={{marginTop:"-2%"}}>
                <Text style={{textAlign:"center",color:"lightgray"}}>
     ......................................................................................................
                </Text>
         </View>
         <TouchableOpacity>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
            <Text style={{color:"gray"}}>
                From
            </Text>
         <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
         </View>
          <View  style={{flexDirection:"row",marginTop:"1%",marginLeft:"3%"}}>
          <Entypo name="star" size={17} color="gray"></Entypo>
           <Text style={{color:"gray",marginLeft:"1%"}}>2.8 </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <Text style={{color:"gray"}}>28mins </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray"  style={{marginTop:"1%"}} ></FontAwesome>
           <Text style={{color:"gray"}}>150 for two </Text>     
         </View>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
          <MaterialCommunityIcons name="brightness-percent" size={15} color="darkorange" style={{}}></MaterialCommunityIcons>
          <Text style={{marginLeft:"1%",marginTop:"-.5%",color:"gray"}}>50% off | Use WELCOMEE67</Text>
         </View>
         </TouchableOpacity>
         </View> 

{/*...................4th pic................................ */}
<View style={{backgroundColor:"white",marginTop:"5%"}}>
<View style={{alignItems:"center",flexDirection:"row",}}>
        <Image style={{height:20,width:20,marginLeft:9}} source={require('../assets/nonveg.png')}></Image> 
        <Entypo name="star" size={20} color="darkorange" ></Entypo> 
        <Text style={{color:"darkorange"}}>
            BEST SELLER
        </Text>
        <TouchableOpacity onPress ={()=> setfomodal (true)}>
            <Image style={{
                borderRadius:20,
                height:135,
                width:150,
                marginLeft:"26%"
                }}source={require('../assets/nvbiriyani5.jpg')}>
            </Image>
        </TouchableOpacity>

        <View style={{marginLeft:"-38%",width:"20%"}}>
            <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10
                ,marginTop:"170%",
                
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={{marginLeft:"2%",}}>      
         <Text style={{ marginTop:"-17%",color:"black",fontWeight:"bold",fontSize:17}}>
                Chicken Biriyani
          </Text>      
        </View>
        <View style={{flexDirection:"row",marginLeft:"3%"}}> 
            <FontAwesome name="rupee" size={20} color="gray"  style={{marginTop:"-10%"}} ></FontAwesome>
            <Text style={{marginTop:"-11%",fontSize:18}}>
                240
            </Text>
         </View>
         <View style={{marginTop:"-2%"}}>
                <Text style={{textAlign:"center",color:"lightgray"}}>
     ......................................................................................................
                </Text>
         </View>
         <TouchableOpacity>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
            <Text style={{color:"gray"}}>
                From
            </Text>
         <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
         </View>
          <View  style={{flexDirection:"row",marginTop:"1%",marginLeft:"3%"}}>
          <Entypo name="star" size={17} color="gray"></Entypo>
           <Text style={{color:"gray",marginLeft:"1%"}}>2.8 </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <Text style={{color:"gray"}}>28mins </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray"  style={{marginTop:"1%"}} ></FontAwesome>
           <Text style={{color:"gray"}}>150 for two </Text>     
         </View>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
          <MaterialCommunityIcons name="brightness-percent" size={15} color="darkorange" style={{}}></MaterialCommunityIcons>
          <Text style={{marginLeft:"1%",marginTop:"-.5%",color:"gray"}}>50% off | Use WELCOMEE67</Text>
         </View>
         </TouchableOpacity>
         </View>
{/*...................5th pic................................ */}
<View style={{backgroundColor:"white",marginTop:"5%"}}>
<View style={{alignItems:"center",flexDirection:"row",}}>
        <Image style={{height:20,width:20,marginLeft:9}} source={require('../assets/nonveg.png')}></Image> 
        <Entypo name="star" size={20} color="darkorange" ></Entypo> 
        <Text style={{color:"darkorange"}}>
            BEST SELLER
        </Text>
        <TouchableOpacity onPress ={()=> setfimodal (true)}>
            <Image style={{
                borderRadius:20,
                height:135,
                width:150,
                marginLeft:"26%"
                }}source={require('../assets/1cknbiriyani.jpg')}>
            </Image>
        </TouchableOpacity>

        <View style={{marginLeft:"-38%",width:"20%"}}>
            <TouchableOpacity style={{
                
                backgroundColor:"white",            
                justifyContent:"center",
                borderWidth:1,
                borderRadius:10
                ,marginTop:"170%",
                
                }}>
            <Text style={{textAlign:"center",color:"green",fontWeight:"bold",fontSize:17}}> ADD </Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={{marginLeft:"2%",}}>      
         <Text style={{ marginTop:"-17%",color:"black",fontWeight:"bold",fontSize:17}}>
                Chicken Biriyani
          </Text>      
        </View>
        <View style={{flexDirection:"row",marginLeft:"3%"}}> 
            <FontAwesome name="rupee" size={20} color="gray"  style={{marginTop:"-10%"}} ></FontAwesome>
            <Text style={{marginTop:"-11%",fontSize:18}}>
                90
            </Text>
         </View>
         <View style={{marginTop:"-2%"}}>
                <Text style={{textAlign:"center",color:"lightgray"}}>
     ......................................................................................................
                </Text>
         </View>
         <TouchableOpacity>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
            <Text style={{color:"gray"}}>
                From
            </Text>
         <Text style={{fontWeight:"400"}}> Biriyani Hut</Text>
         </View>
          <View  style={{flexDirection:"row",marginTop:"1%",marginLeft:"3%"}}>
          <Entypo name="star" size={17} color="gray"></Entypo>
           <Text style={{color:"gray",marginLeft:"1%"}}>2.8 </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <Text style={{color:"gray"}}>28mins </Text>
           <Entypo name="dot-single" size={15} color="gray" style={{marginTop:"1%",marginLeft:"-1%"}}></Entypo>
           <FontAwesome name="rupee" size={15} color="gray"  style={{marginTop:"1%"}} ></FontAwesome>
           <Text style={{color:"gray"}}>150 for two </Text>     
         </View>
         <View  style={{flexDirection:"row",marginTop:"2%",marginLeft:"3%"}}>
          <MaterialCommunityIcons name="brightness-percent" size={15} color="darkorange" style={{}}></MaterialCommunityIcons>
          <Text style={{marginLeft:"1%",marginTop:"-.5%",color:"gray"}}>50% off | Use WELCOMEE67</Text>
         </View>
         </TouchableOpacity>
         </View>
    </ScrollView>
    </ScrollView>
</View>
    )
}

const styles =StyleSheet.create({
    search:
  {
    marginTop:"5%",
   
    
   borderWidth:1,
   width:"95%",
   borderRadius:3,
  
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
      btwn:
  {
    borderWidth:1,
   backgroundColor:"#f5e2ab",
    borderRadius:5,
    padding:6,
    paddingLeft:12,
    fontWeight:"300",
    borderColor:"lightpink"
    },
    veg:
 {
  borderWidth:1,
  height:30,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  borderColor:"lightgray",
  fontWeight:"300"
  },
  nonveg:
 {
  borderWidth:1,
  borderRadius:5,
  padding:6,
  paddingLeft:8,
  fontWeight:"300",
  borderColor:"lightgray"
  },
  lesthan:
    {
      borderWidth:1,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      },
      rated:
    {
      borderWidth:1,
      borderRadius:5,
      padding:6,
      paddingLeft:11,
      fontWeight:"300",
      borderColor:"lightgray",
      textAlign:"auto"
      }

})

export default rs100tors250;