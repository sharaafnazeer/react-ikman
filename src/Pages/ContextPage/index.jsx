import {Fragment} from "react";
// Hey how are you
const SubHeading = ({children}) => {
    return (
        <div>{children}</div>
    )
}
const MiniTitle = ({children}) => {
    return <strong>{children}</strong>
}
const Paragraph = ({children}) => {
    return <div>
        {children}
    </div>
}
const Heading = ({level, children, subtitle, miniTitle, para}) => {
    switch (level) {
        case 1:
            return (
                <Fragment>
                    <h1>{children}</h1>
                    <SubHeading>{subtitle}</SubHeading>
                </Fragment>
            )
        case 2:
            return (
                <Fragment>
                    <h2>{children}</h2>
                </Fragment>
            )
        case 3:
            return (
                <Fragment>
                    <h3>{children}</h3>
                    <MiniTitle>{miniTitle}</MiniTitle>
                    <Paragraph>{para}</Paragraph>
                </Fragment>
            )
        default:
            throw Error('Level not found - ' + level);
    }
}
const Section = ({children}) => {
    return (
        <section className="container" style={{
            height: '20rem',
            background: 'yellowgreen',
        }}>
            {children}
        </section>
    )
}
const ContextPage = () => {
    return (
        <Section>

            <Heading level={3}
                     miniTitle="Before you use context"
                     para="Context is very tempting to use! However, this also means it’s too easy to overuse it. Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.">
                Hello3
            </Heading>
        </Section>
    )
}

export default ContextPage;