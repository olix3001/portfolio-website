import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {

        return (
            <Html className="dark">
                <Head />
                <body className="bg-gray-100 dark:bg-gray-900">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument