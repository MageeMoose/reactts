interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode
};

export const Child = ({color, onClick}: ChildProps ) => 
    <div>
        {color }
        <button onClick={onClick}>Click Me</button> 
    </div>


export const ChildAssFC: React.FunctionComponent<ChildProps> = ({color, onClick,}) => {
    return <div>
        
        {color}
        <button onClick={onClick}>Click Me</button>
        </div>;
};
