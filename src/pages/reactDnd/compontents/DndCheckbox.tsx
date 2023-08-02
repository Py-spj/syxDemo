import React, {useContext, useRef} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {Checkbox} from 'antd';
import {OptionsContext, OptionsContextProvider} from "./OptionsContextProvider";
import 'antd/dist/reset.css';

const CHECKBOX_TYPE = 'dndCheckbox';
type Props = {
    options:{label: string, value: string}[];
    setOptions: React.Dispatch<React.SetStateAction<{label: string, value: string}[]>>;
    value: string[];
    onChange: React.Dispatch<React.SetStateAction<string[]>>
}

function DraggableCheckbox(props:any) {
    const ref = useRef(null);
    const to:number = props.index
    const {moveOption} = useContext(OptionsContext);

    const [, drag] = useDrag(
        () => ({
            type: CHECKBOX_TYPE,
            item: {index: to},
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }), [to]
    )


    const [, drop] = useDrop(() => ({
            accept: CHECKBOX_TYPE,
            drop: (item:{index:number}) => {
                let from = item.index;
                moveOption?.(from, to)
            },
            collect: monitor => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [to, moveOption]
        // [to]
    )

    drop(drag(ref))

    if(typeof props.item ==='string'){
        return <span ref={ref}><Checkbox value={props.item}>{to}{props.item}</Checkbox> </span>
    }
    else{
        return <span ref={ref}><Checkbox value={props.item.value}>{to}{props.item.label}</Checkbox> </span>
    }
}

const DndCheckbox = () => {
    const {options, value, onChange} = useContext(OptionsContext)
    return <Checkbox.Group value={value} onChange={onChange}>
        {
            options?.map((item, index) => {
                return <DraggableCheckbox key={item.value} item={item} index={index}/>
            })
        }
    </Checkbox.Group>
}

export const DndCheckBoxGroup = (props:Props) => {
    // const {options,setOptions,value,onChange} = props
    return <OptionsContextProvider {...props}>
        <DndProvider backend={HTML5Backend}>
            <DndCheckbox/>
        </DndProvider>
    </OptionsContextProvider>
}



