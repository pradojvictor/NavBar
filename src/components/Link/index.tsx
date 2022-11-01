import { Link as LinkRoute } from "react-router-dom"


interface ILinkProps {
    texto?: any;
    redirect: string;
    classname?: string;
    target: any;
}



export default function Link(props: ILinkProps) {
    return (
        <LinkRoute
            target={props.target}
            className={props.classname}
            to={props.redirect}
        >
        {props.texto}
        </LinkRoute>
    )
}

