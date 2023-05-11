import { AnotherClientComponent } from "@/components/another-client-component"
import { ExampleClientComponent } from "@/components/example-client-component-v2"

export default function A() {
    return (
        <>
            <div className="">
                i am in test_for_global_state_management
                <ExampleClientComponent >
                    i am ExampleClientComponent
                </ExampleClientComponent>
                <AnotherClientComponent>
                    i am AnotherClientComponent
                </AnotherClientComponent>
                
            </div>
        </>
    )
}