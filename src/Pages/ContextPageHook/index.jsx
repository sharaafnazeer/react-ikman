import {createContext, Fragment, useContext} from "react";

const HeadingContext = createContext(1);
// Creating a context for the heading with level 1


const Heading = ({children}) => {

    const level = useContext(HeadingContext);
    // Using the already created relatable context -> which is HeadingContext

    switch (level) {
        case 1:
            return (
                <Fragment>
                    <h1>{children}</h1>
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
                </Fragment>
            )
        case 4:
            return (
                <Fragment>
                    <h4>{children}</h4>
                </Fragment>
            )
        default:
            throw Error('Level not found - ' + level);
    }
}

const Section = ({level, children, background = "yellowgreen"}) => {
    return (
        <section className="container" style={{
            minHeight: '30rem',
            background,
        }}>
            <HeadingContext.Provider value={level}>
                {children}
            </HeadingContext.Provider>
        </section>
    )
}

const ContextPageHook = () => {
    return (
        <Section level={1}>
            {/*Level1*/}
            <Heading>Main Title</Heading>

            <Section level={2} background="yellow">
                {/*Level2*/}
                <Heading>Heading 2</Heading>
                <Heading>Heading 2</Heading>

                <Section level={3} background="#E3C5C5">
                    {/*Level3*/}
                    <Heading>Heading 3</Heading>
                    <Heading>Heading 3</Heading>

                    {/*Level4*/}
                    <Section level={4} background="#DBE3C5">
                        <Heading>Heading 4</Heading>
                        <Heading>Heading 4</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}

export default ContextPageHook;


// useContext()

// 1. Creating the context
// 2. Using the context
// 3. Providing the context