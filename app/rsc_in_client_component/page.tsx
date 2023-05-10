
import ExampleClientComponent from '../../components/example-client-component'
import ExampleServerComponent from '../../components/example-server-component'
export default function Test() {
    return <>
    i am grand parent page
        <ExampleClientComponent>
            {/* @ts-expect-error Async Server Component */}
            <ExampleServerComponent />
            
        </ExampleClientComponent>
    </>
}