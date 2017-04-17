// Import React
import React from "react"

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Code,
    Deck,
    Heading,
    Quote,
    Slide,
    Text,
    Appear,
    Layout,
    Image,
    List,
    ListItem,
    S,
    Fit,
    Fill
} from "spectacle"
import CodeSlide from "spectacle-code-slide"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
    vsoLogo: require("../assets/vso-logo.png"),
    vsCodeLogo: require("../assets/vscode-logo.png"),
    rageQuit: require("../assets/rage_quit.gif")
}

preloader(images)

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
})

const render = () => (
    <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fill caps textColor="tertiary">
                Modern TypeScript is awesome!!
            </Heading>
            <Text margin="80px 0 0" textColor="secondary" size={4} bold>
                Jake Ginnivan
            </Text>
            <Text size={6}>Seven West Media</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={1} textColor="primary" caps margin="0 0 10% 0">Agenda</Heading>
            <Appear><Text size={2} textColor="secondary" margin="4% 0 0">Why TypeScript?</Text></Appear>
            <Appear><Text size={2} textColor="secondary" margin="4% 0 0">TypeScript Introduction</Text></Appear>
            <Appear><Text size={2} textColor="secondary" margin="4% 0 0">Awesome features in TypeScript 2.x</Text></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary" caps>Why TypeScript?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={"Panel run by Erik Meijer with Anders Hejlsberg, Gilad Bracha, Martin Odersky, and Peter Alvaro."}>
            <BlockQuote>
                <Quote style={{ fontSize: "3rem" }}>Are you saying you cannot write large programs in JavaScript?</Quote>
                <Cite>Erik Meijer</Cite>
            </BlockQuote>

            <Appear>
                <BlockQuote>
                    <Quote style={{ fontSize: "3rem" }}>No, you can write large programs in JavaScript. You just can’t maintain them.</Quote>
                    <Cite>Anders Hejlsberg</Cite>
                </BlockQuote>
            </Appear>

            <Appear>
                <Text textColor="blue"><S type="underline">https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2012/Panel-Web-and-Cloud-Programming</S></Text>
            </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={
`JavaScript would not scale to the number of developers and complexity of such a large project.
They investigated and found 70% of the time was spent understanding existing code,
25% maintaining existing features and only 5% on new features.
Goal was to drop understanding to 65%, 20% for existing features and 15% on new features`}
        >
            <Heading size={2} textColor="tertiary" caps margin="0 0 100px 0">Monaco</Heading>

            <Appear><Image width="50%" src={images.vsoLogo} /></Appear>
            <Appear><Image width="200px" src={images.vsCodeLogo} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <Image width="400px" src={images.vsCodeLogo} margin="0 0 50px 0" />

            <List>
                <ListItem textColor="green" textSize={22}>Understanding/reading</ListItem>
                <ListItem textColor="blue" textSize={22}>Maintaining existing features</ListItem>
                <ListItem textColor="purple" textSize={22}>New Features</ListItem>
            </List>

            <Layout>
                <Text bgColor="green" textColor="white" style={{ width: "70%" }} margin="0" padding="20px 0" textSize={16}>70%</Text>
                <Text bgColor="blue" textColor="white" style={{ width: "25%" }} margin="0" padding="20px 0" textSize={16}>25%</Text>
                <Text bgColor="purple" textColor="white" style={{ width: "5%" }} margin="0" padding="20px 0" textSize={16}>5%</Text>
            </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`1) new features faster, target older browsers
2) Move runtime errors to compilation time
3) Speed up development, make it easier to understand existing code quicker`}
        >
            <Heading size={2} textColor="tertiary" caps margin="0 0 100px 0">Problems to solve</Heading>

            <List>
                <Appear><ListItem>Static Type System</ListItem></Appear>
                <Appear><ListItem>Better tooling support</ListItem></Appear>
                <Appear><ListItem>Downlevel compilation (ES6/7 -> ES3/5)</ListItem></Appear>
            </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`Why not start with TypeScript?
JSX Support
< TypeScript 1.8 module systems didn't work with CommonJS that well
Webpack Loader imaturity
Only basic linting support
Object rest/spread
`}
        >
            <Heading textColor="tertiary">TypeScript at SWM</Heading>
            <Text>Started with Babel/ES6</Text>
            <Appear><Text>Converted to TypeScript after launch</Text></Appear>

            <Appear><Text margin="30px 0 0 0">Why?</Text></Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fill caps textColor="tertiary">
                TypeScript introduction
            </Heading>

            <Text>Demo</Text>

            Union types
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fill caps textColor="tertiary">
                Modern TypeScript (>2.0)
            </Heading>

            <Appear>
                <Text textColor="secondary" size={2} margin="50px 0 0 0">
                    <S type="italic">When things got really good</S>
                </Text>
            </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Responsible for quicksort amongst other things">
            <BlockQuote>
                <Quote style={{ fontSize: "2rem" }}>I call it my billion-dollar mistake. It was the invention of the null reference in 1965. At that time, I was designing the first comprehensive type system for references in an object oriented language (ALGOL W). My goal was to ensure that all use of references should be absolutely safe, with checking performed automatically by the compiler. But I couldn't resist the temptation to put in a null reference, simply because it was so easy to implement. This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.</Quote>
                <Cite>Tony Hoare</Cite>
            </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <Text>In JavaScript we could call it the two billion-dollar mistake because we have both <Code>null</Code> and <Code>undefined</Code></Text>

            <Appear><Text margin="50px 0 0 0">TypeError: undefined is not a function</Text></Appear>
            <Appear><Image src={images.rageQuit} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <Layout>
                <Appear>
                <Fill>
                    <Heading textSize={32}>TypeScript 1.x</Heading>
                    <Text margin="20px 0 0 0" textSize={18}>All types can be undefined</Text>
                    <Text margin="20px 0 0 0" textSize={18}><Code textSize={18}>const x: number = undefined</Code> &lt;-- error</Text>
                </Fill>
                </Appear>

                <Appear>
                <Fill>
                    <Heading textSize={32}>TypeScript 2.x</Heading>
                    <Text margin="20px 0 0 0" textSize={18}><Code textSize={18}>--strictNullCheck introduced</Code></Text>
                    <Text margin="20px 0 0 0" textSize={18}>Removes undefined from all types</Text>
                    <Text margin="20px 0 0 0" textSize={18}><Code textSize={18}>null</Code> &amp; <Code textSize={18}>undefined</Code> now are unary types</Text>
                    <Text margin="20px 0 0 0" textSize={18}><Code textSize={18}>const x: number = undefined</Code> &lt;-- error</Text>
                    <Text margin="20px 0 0 0" textSize={16}><Code textSize={16}>const x: number | undefined = undefined</Code> &lt;-- OK</Text>
                </Fill>
                </Appear>
            </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <Heading>Type guards recap</Heading>

            <CodeSlide
              transition={[]}
              lang="js"
              code={require("raw!../assets/code.example")}
              ranges={[
                /*{ loc: [0, 270], title: "Walking through some code" },
                { loc: [0, 1], title: "The Beginning" },*/
              ]}
            />
        </Slide>
    </Deck>
)

export default class Presentation extends React.Component {
    render() { return render() }
}