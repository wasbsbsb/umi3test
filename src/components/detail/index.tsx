import React from "react"

import { connect } from 'umi'

const Detail = (Props: any) => {
    return (
        <div>
            <p> 假设这儿是redux公用值</p>
            <p>password: {Props.form.username} </p>
            <p>Hello : {Props.form.password} </p>
        </div>
    );
};

export default connect((state: any) => {
    return { form: state.user.form }
})(Detail);


