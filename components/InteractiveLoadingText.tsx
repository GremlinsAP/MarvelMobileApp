/**
 * Author: Elwyn Van der Borght
 */

import React, { FC, useEffect, useState } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface LoadingTextProps {
    style: StyleProp<TextStyle>;
}

const InteractiveLoadingText: FC<LoadingTextProps> = ({ style }) => {
    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setDots((prev) => ((prev + 1) % 3)), 500);
        return () => clearInterval(interval);
    }, [])

    return <Text style={style}>Loading.{".".repeat(dots)}</Text>
}

export default InteractiveLoadingText;