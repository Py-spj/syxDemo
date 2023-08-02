import React, {JSX, useCallback} from "react";

 type Props = {
    options?:{label: string, value: string}[];
    setOptions?: any;
    value?: string[];
    onChange?: any;
    children?:JSX.Element;
    moveOption?:(from:number,to:number) => void
}

const initialContextValue:Props = {
    options: [], moveOption: () => { }
}
export const OptionsContext = React.createContext(initialContextValue);
export const OptionsContextProvider = (props:Props) => {
    const { options, setOptions, value, onChange } = props
    const moveOption = useCallback((oldIndex:number, newIndex:number) => {
        const movedItem = options?.[oldIndex]
        const sortedOptions:any = options?.filter((item, index) => {
            return index !== oldIndex
        })
        sortedOptions?.splice(newIndex, 0, movedItem)

        const sortedValue:any = value?.sort((a,b)=> {
            return sortedOptions.findIndex((item: { value: string })=>item.value === a) -
                sortedOptions .findIndex((item: { value: string })=>item.value === b)
        })
        onChange?.(sortedValue)
        setOptions?.(sortedOptions)
    }, [options, setOptions, value])

    return <OptionsContext.Provider value={{options, moveOption, value, onChange}}>
        {props?.children}
    </OptionsContext.Provider>
}