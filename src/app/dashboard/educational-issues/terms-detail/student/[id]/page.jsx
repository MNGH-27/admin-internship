import { StudentTermsDetailTemplate } from '@template/index'

const StundetTermsDetailPage = ({ params: { id } }) => {
    return (
        <StudentTermsDetailTemplate termId={id} />
    )
}

export default StundetTermsDetailPage