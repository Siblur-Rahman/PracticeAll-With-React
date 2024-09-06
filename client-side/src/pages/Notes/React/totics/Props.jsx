import Blog from "../../../../shared/Blog";

const PropsReact = () => {
    return (
        <div>
            <Blog
            topic={'React Props'}
            npmCode={'Install: npm i prototype'}
            url={'https://www.npmjs.com/package/prop-types'}
            code={
                `
import PropTypes from 'prop-types';

const Component = ({prop-1, prop-2}) => {
return (

<div > </div>
);
};
Component.propTypes = {
prop-1: PropTypes.object.isRequired,
prop-2: PropTypes.func.isRequired
}
export default Component;
                `
            }
            />
            <Blog
            topic={'To ignore PropType Validation'}
            fileName={'.eslintrc.cjs'}
            />
        </div>
    );
};

export default PropsReact;