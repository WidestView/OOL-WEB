const StatusBadge = ({status}) => {
    // status => C, PC, P

    switch (status) {
        case "C":
            return <span className={`badge badge-success ml-auto`}>Completo</span>;
        case "PC":
            return <span className={`badge badge-warning ml-auto`}>Parcialmente Completo</span>;
        default: 
            return <span className={`badge badge-danger ml-auto`}>Pendente</span>;
    }
}
 
export default StatusBadge;