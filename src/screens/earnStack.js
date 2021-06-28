import React, {useState} from 'react';
import { View, Text,StyleSheet, TextInput,Button,Modal } from 'react-native';
import colors from '../config/color';
import { Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window');

const modalView = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        
          <View style={styles.modalView}>
            <View style={{flexDirection:"row",marginBottom:"10%"}}>
          
              <Text style={{fontSize:20,fontWeight:"bold",color:"#022f45",marginRight:"1%"}}>Login</Text>
              <Text style={{fontSize:20,color:"gray",marginRight:"1%"}}>or</Text>
              <Text style={{fontSize:20,fontWeight:"bold",color:"#022f45",}}>Signup</Text>
              </View>
              <TextInput
              style={{borderWidth:1,borderColor:"gray", width:"100%",height:40,borderRadius:10,marginBottom:"5%"}}
             placeholder="  +91 |   Enter phone number*"
            
              keyboardType="numeric"
             maxLength={10}
                />
                 <View style={{flexDirection:"column",left:"3%",marginBottom:"5%"}}>
                <View style={{flexDirection:"row",marginBottom:"1%"}}>
                 
                <Text style={{color:"gray"}}>By continuing, I agree to the </Text>
                <Text style={{color:colors.button,fontWeight:"bold"}}>Terms of use  </Text>
                </View>
                <View style={{flexDirection:"row",marginBottom:"1%"}}>
                <Text style={{color:colors.button}}>&  Privacy  Policy</Text>
                </View>
                </View>
                <View style={{marginBottom:"5%"}}>
                <Button
                style={{}}
               title="CONTINUE"
                 color={colors.button}
                 onPress={() => navigation.navigate('Account')}
                />
                </View>
                <View style={{left:"3%"}}>
               
                <Text style={{color:"gray",marginBottom:"1%"}}>Having trouble logging in?</Text>
                <Text style={{color:colors.button,fontWeight:"bold",right:"1%"}}> Get help </Text></View>
         
          </View>
      
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent:"flex-end",
    alignSelf:"flex-end"

  
    
    
  },
  modalView: {
    width:"100%",
    height:"50%",
    position:"absolute",
    backgroundColor: "white",
    padding: 30,
    bottom:0,
    justifyContent:"center",
  
 
    },
 
  

});

export default modalView;
