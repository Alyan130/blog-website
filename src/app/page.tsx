
import Header from "@/components/layout/Header";
import EditorPick from "@/components/shared/EditorPick";
import Featured from "@/components/widgets/Featured";
import Hero from "@/components/widgets/Hero";
import Section from "@/components/widgets/Section";



export default function Home() {
  return (
    <>
    <main>
     <Header opacity="0.48"/>
     <Hero/>
     <Featured/>
     <Section/>
     <EditorPick heading="Editors Pick"/>
    </main>
    </>
  );
}
