interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className="max-w-[1140px] mx-auto py-[128px] px-16">{children}</div>;
};
export default Container;
