import React, {useState} from "react";
import {TextInput, TextInputProps} from "react-native";

export const AutoExpandingTextInput: React.FC<TextInputProps> = (props) => {
  const [height, setHeight] = useState(0)
  console.log(height)
  return (
    <TextInput
      {...props}
      multiline
      onContentSizeChange={event => setHeight(event.nativeEvent.contentSize.height)}
      style={[props.style, {height: Math.max(30, height)}]}
    />
  )
}
