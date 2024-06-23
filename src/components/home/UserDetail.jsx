const UserDetail = ({field, value, link}) => {
    return (
        <li className="flex items-center">
            <span className="flex-[0_0_6rem]">{field}</span>
            <span className="flex-[0_0_2rem]">:</span>
            <span className="text-black dark:text-white break-all">
                {link ? <a href={`${link}?rel=https://eliseu.dev&utm_source=https://eliseu.dev`}
                           target="_blank" rel="noopener noreferrer">{value}</a> : value}
            </span>
        </li>
    );
};

export default UserDetail;
