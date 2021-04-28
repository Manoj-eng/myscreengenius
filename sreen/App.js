import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import I from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/AntDesign';
// import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  return(
    <ScrollView>
    <View style={styles.maincontainer}>
      {/* container1 */}
      <View style={styles.container1}>
        <Icon name='left' color='#ffffff' style={{marginLeft:13}}></Icon>
        <Text style={styles.text1}>Request Immunization Submission</Text>
      </View>
      {/* container2 */}
      <View style={styles.container2}>
        <View>
        <Text style={styles.text2}>Enter Entity Name</Text>
        <TextInput 
        placeholder='Entity Name'
        style={{backgroundColor:'#ffffff',borderWidth:1, marginRight:20, borderRadius:4, borderColor:'#D2D7D9', height:40}}
        />
        </View>

        <View>
        <Text style={styles.text2}>Organization Type</Text>
         <DropDownPicker
         placeholder='Organization Type'
         placeholderStyle={{color:'#B9BDBF'}}
         style={{borderWidth:1, marginRight:20, borderRadius:4, borderColor:'#D2D7D9', color:'#E5E5E5', height:40}}
         />
        </View>

        <View>
        <Text style={styles.text2}>Contact Name </Text>
        <TextInput 
        placeholder='Contact Name'
        style={{borderWidth:1, marginRight:20, borderRadius:4, borderColor:'#D2D7D9', height:40, backgroundColor:'#ffffff'}}
        />
        </View>
       
      </View>

      {/* container3 */}
      <View style={styles.container3}>
        <Text style={styles.text3}>Where would you like to send </Text>
        <Text  style={styles.text3}>the protected URL?</Text>
      </View>
      {/* container4 */}
      <View style={{marginTop:15}}>
        <Text style={styles.text4}>Email address</Text>
      </View>
      {/* container5 */}
      <View style={styles.container5}>
        <Icons name='email'  style={{marginLeft:22, marginTop:10, fontSize:25, color:'#4A4A4A'}}></Icons>
        <TextInput 
        placeholder='Email address'
        style={{marginLeft:13,borderWidth:1, marginRight:20, borderRadius:4,backgroundColor:'#ffffff', borderColor:'#D2D7D9',width:245, height:40}}
        />
      </View>
      {/* container6 */}
      <View style={{marginTop:10, marginBottom:10, flexDirection:'row'}}>
        <Text style={styles.text5}>Or</Text>
        
      </View>
      {/* container7 */}
      <View style={styles.container8}>
        <View style={styles.mobileIcon}>
          <I name='smartphone'  style={{marginLeft:22, marginTop:15, fontSize:29, color:'#A1A1A1'}}></I>
        </View>
        <View>
          <Text style={styles.text6}>Code</Text>
          <DropDownPicker 
          placeholder = '1(US)'
          placeholderStyle={{color:'#505659', fontSize:14, lineHeight:24 }}
          style={styles.dropdown}
          />
        </View>
        <View>
          <Text style={styles.text6}>Phone Number</Text>
          <TextInput 
            placeholder='Phone Number'
            style={styles.input}
          />
       </View>
      </View>
      {/* container9 */}
      <View style={styles.container9}>
        <Text style={styles.text7}>Why do you  need to submit this document?</Text>
       <DropDownPicker
       placeholder='Select Reason'
       placeholderStyle={{color:'#505659',fontSize:16, lineHeight:24 }}
       style={{borderWidth:1, marginRight:10, borderRadius:3, borderColor:'#D2D7D9', height:40,}}
       />
      </View>
      {/* container10 */}
        <View style={styles.container10}>
          <Ico name='checksquare'  style={{marginTop:10, fontSize:20, color:'#5DA8CB'}}></Ico>
          <Text style={styles.text8}>I consent to allow "Certify Provider Name" to submit my "Document Name" to "Entity Name" for the purpose of "Reason to share"</Text>
         
        </View>
          {/* container11 */}
        <View  style={styles.container11}>
          <Text style={styles.text7}>Type your name for electronic consent</Text>
          <TextInput 
          placeholder='Enter Name'
          placeholderStyle={{fontSize:16, lineHeight:24, color:' #505659'}}
          style={{borderWidth:1, height:40, marginRight:10, borderRadius:3, borderColor:'#D2D7D9'}}
          />
        </View>
          {/* container12 */}
          <View style={styles.container12}>
            <TouchableOpacity>
              <Text style={styles.btn1}>Submit Request</Text>
            </TouchableOpacity>
          </View>

          {/* container13 */}
          <View style={styles.container13}>
            <TouchableOpacity>
              <Text style={styles.btn2}>Cancel</Text>
            </TouchableOpacity>
          </View>

    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'#E5E5E5'
  },
  container1:{
    flexDirection:'row',
    height:64,
    backgroundColor:'#00B8E0',
    alignItems:'center'
    
  },
  text1:{
    fontFamily:'Montserrat',
    fontSize:16,
    lineHeight:21,
    fontStyle:'normal',
    fontWeight:'500',
    color:'#fff',
    marginLeft:13

  },
  container2:{
    marginTop:20,
    marginLeft:20
  },
  text2:{
   fontSize:14,
   lineHeight:22,
   color:'#505659',
   fontFamily:'Montserrat',
   fontStyle:'normal',
   fontWeight:'normal'

  },

  container3:{
   marginTop:12,
    alignItems:'center'
  },
  container5:{
    flexDirection:'row',
  },
  container7:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  container8:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginRight: 10
  },
  container10:{
    flexDirection:'row',
    marginLeft:23,
    marginTop:10
  },
  input:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    width: 150
  },
  dropdown:{
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
     height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    width: 100
  },
  mobileIcon:{
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container9:{
    marginTop:20,
    marginLeft:23,

  },
  container11:{
    marginLeft:21,
    marginTop:20
  },

  container12:{
    marginTop:30,
    alignItems:'center'
  },
  btn1:{
    borderRadius:28,
    backgroundColor:'#00B8E0',
    width:250,
    padding:6,
    textAlign:'center',
    fontSize:16,
    lineHeight:19,
    color:'#ffffff',
    fontWeight:'500'
  },


  container13:{
    marginTop:15,
    alignItems:'center',
    marginBottom:15
  },

  btn2:{
    fontSize:16,
    lineHeight:20,
    fontWeight:'500',
    color:'#00B8E0'
  },
  text3:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize:14,
    lineHeight:20,
    color:'#48575E',
    marginLeft:9
  },
  text4:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:22,
    color:'#505659',
    marginLeft:61
  },
  text5:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize:14,
    lineHeight:22,
    color:'#748488',
    marginLeft:24
  },
  text6:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:22,
    color:'#505659'
  },
  text7:{
    color:'#505659',
    fontSize:14,
    lineHeight:22,
    
  },
  text8:{
    fontSize:13,
    lineHeight:19,
    color:'#48575E',
    fontFamily:'Nunito'
  },
   text9:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:22,
  }


  


})

export default App