import Container from "@/components/container";

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="scroll-m-20 text-start lg:text-start text-myBlack text-3xl lg:text-6xl font-extrabold tracking-tight text-balance leading-normal">
          CAMP RESOURCE LIST
        </h1>
        <div className="space-y-6 mt-6">
          {/* Section 1: Introduction to the internet */}
          <div className="w-full space-y-4">
            <h3 className="scroll-m-20 text-xl font-normal tracking-tight">
              Section 1: Introduction to the internet
            </h3>
            <ul className="space-y-2 pl-12">
              <li className="list-disc">
                <a
                  href="https://jsbin.com"
                  className="text-orange-600 hover:underline"
                >
                  JsBin Online IDE
                </a>
                <span className="text-myBlack"> (recommended)</span>
              </li>
              <li className="list-disc">
                <a
                  href="/assets/SkillGridCornellNotesTemplate.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  Skillgrid Cornell Notes Template
                </a>
              </li>
              <li className="list-disc">
                <a
                  href="https://www.submarinecablemap.com"
                  className="text-orange-600 hover:underline"
                >
                  Submarine Cable Map
                </a>
              </li>
              <li className="list-disc">
                <a
                  href="https://www.google.com/chrome"
                  className="text-orange-600 hover:underline"
                >
                  Google Chrome Browser
                </a>
                <span className="text-myBlack"> (recommended)</span>
              </li>
            </ul>
          </div>

          {/* section 2: Intro to HTML */}
          <div className="w-full space-y-4">
            <h3 className="scroll-m-20 text-xl font-normal tracking-tight">
              Section 2: Introduction to HTML
            </h3>
            <ul className="space-y-2 pl-12">
              <li className="list-disc">
                <a
                  href="/assets/htmlcheatsheet.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  HTML Cheatsheet
                </a>
                <span className="text-myBlack"> by Stanford University</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
