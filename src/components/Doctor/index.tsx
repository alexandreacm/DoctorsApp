import React from 'react';
import { 
    Container, 
    Avatar, 
    Name, 
    Specialist,
    DoctorProps 
} from './styles';

export type DoctorDataProps = {
 id: string;
 name: string;
 avatar: string;
 specialist: string;
}

type Props = DoctorProps & {
 data: DoctorDataProps
}

export default function Doctor({ type, data, ...rest }: Props){
    return (
        <Container type={type} {...rest}>
            <Avatar source={{ uri: data?.avatar}} resizeMode='contain' />
            
            <Name>{ data?.name }</Name>
            <Specialist>{data?.specialist}</Specialist>
        </Container>
    )
}