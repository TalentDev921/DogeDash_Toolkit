import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <title>Icon</title>
      <defs>
        <image  width="32" height="32" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAAXNSR0IB2cksfwAAB5xJREFUeJzFlglQVtcZhu899yIQF2JAB1IjW8AmdYkZaxFtms0mJi4QDVFcRkUygRIJLhjB4BIRBRvBwQ2FWEeyiCZtJzWdlnZi1HSyObEhaiymWg1IkJZAA/z/vffcPucHTGdi2hiJYebMvf/7neU57/edcxFaD/w1b50Y1Vw6Ma1508PXPJe41gmaSibr0jKyHK+ZZ9v+t3/vQJptRLu2eEjaxkBpmYn1q2Zc05zXNLhx/TR/aYsM3ImUHlM4HjMFt8Z/b0CuI2YDMEt6TQuoz6UCs8xnz2am+F13IFJzk2MZK4EIdrzGGzi0HIe8gP3YtY2k6w7kSj3BdYxB1I6NU5VAvYpbZ1zL0NAev65Any6f3ZfF83FEo70pLfFKeHHFRcdjbALMRrvr41kLJ103IAr5aVIVKr1GI+8Fg3+5+99Kt9v9jjsdZh0xQP2KahKzr7qWrhroXNb8cGmbi9SiAOVRL28o/eT0LD/0JdLyG+yomGUOIZ5+/MHcXt8Z0N8XpvahXhaQrgDSVE8d7Y/cUmarmCvFCO6jn0lVQ5a42Pk0Fzi2Mfw7A3ItPYGFMn3u2EZ+1PYdl5Rek5ANoLEYZwZSR00ATaaOmvg9lNO3+J24/IAeB6pNTQsFQqWqL4X7V2qn4jKoI+4HaBKxFp6FIw4WvEufQlKmATXJuYrL8hsBnZ6boVMr81hwBDuXOJATu7u0XcU+mJDbH4hsYr0BeAW4rUrn91blEg71pqUfuf05/x4D0qQIkY54DIcEzvyNWvnDlzE9jtgoYl/w3Duyek3niWvrFUIN3YCuHKyjn91jQEDMV+7Q6nBjyW0vb7KUfuzelYP4nYMe6HPHFoe6xwBRRKoCbcuosxxROO5UltMjQCeSFsewaIaqB+kVW390YONrX4IaBcDEUycNpHHDqCN5PhfeHFJ8t20b0zyOcD1SlN5z+qmPlf5C5Lb/W9z/E6gmcakJjCrkQSxaA8Cu7tg78Wt/AuRMdMGzzGuaHyn9TzElhtfVizuk0IB50XJ135g9ETuiLFdsKw8vC/3WQNg+njQ8iPWSZxV3TaPS3x69TuN3OoC67z5yxIFxR5dpr8dsFpam38fCQ72usGxN30a7tGvwTh09AY2mL/hWQMcn5Aaw4DrHMiMozo+oo/IRr+dLH6hlxKPNkB7DwcFy6egfKt129WHAFOCOodyxNXF0Sm2GC1SUJfU0jytu9LjGkg0/2B191UDsWh3zOziyFikpHln97KdKPzpsoykdo4BU+QH7GtBlYz9cKg9Eb/EHZgmL3tnhimavpudNrU13N99SbpA2YIzorjQG4VTBirC9V1z7iuKxu1dxZI1n1DeJdB12bf2A0g//cJNJqh7l0vupbYs2W+o5ti7Oqxgw9wGToBb1SlGU/EnaOZ9rmj6SNM1Gt4gfAlY9H0G74mV5RSDX1aex8zDqwwKgctTRvM87dS1cSv0XlhS6V+p/5vScuOdkplYZud3PYVH0Puy+lXp5XvUvDKvQSeOjwA7EpVrGPEP8fWCUa5nfCOjdMWuDcGdN1xe7lNqpUnp1bAl0YhHWj1W7VOnpHsPk97PrKe2u+MLj6vkLzj5e73NHGNPpN4/+DiBFq+vnHPZIPYO0SY80JqSG7JsyP6RK/1ogTk8fbtsVwAygYJtcS6yNe295q29yV4xmouTOOtC3PFz7pO9uKQvfqWpiBXogqdqPS8VKX33zngCcUAU+AP0I0L60b2yY+T6AO2ka7TnmHP21QKRpKq486fuaW8bqMcez/6n0395aqibPYYIbWaCJXa/5L3dmMmkcsXrc2bDwfIqnUxdZ6OE416bACi7Oap0fXOU3L7iqX7sU65mnmXgU4/ImB/068CtAbw3f2I8P6Cyg/Kmdz/hfZ193jDq4kwXG4kQH73uTPkn/l9KLb6m4FX0mukD/naPptUrPDq3sDehcdAX8HoX99pzg/YJ4Fu+/97rGC4wLUHGg4nnGfQVI2vojnKi7bD4RFsd63MlFDUp/MXLbDQxYyo5uYnA1C6xTetGg3bp6x4HR7PI8fYqXXZhndW0gjb6xxBrViStuSG5G47LUn0IfgzaG+QJU2tTdxHN5fO+D/S4DHYotvtlxjCyvI3ox4AQfpLLL7mj6Q2gPKItVYc45+8RnXam6l4kT0QXx7Sx4QukZA18KZffLWEgd/wLGV0/r/6qfOlX0C0NvsdSJdPXpjJnBM5m2kxvX9AH9MaZEXfcpdB5Ku8CiueNPZ7apIN+dIRSpuuwCaS9ZrvYXpa8M2+PPbtezM5MxH2BLxaq6Oe4TIS/3Z5FctBD6n2JjO3Y0PkaaNZXuqb5C5vPTKo1htOEtjhnb6piRtIgWaf48xr+6l8rrAE5QkqoDFiEl2sFud4iloN+hdsVClen/SPWlRGr6WFwYRcxld/sK6mdf7OofR79kVRvMVVFxKaltYtBvhOOKGWhBlk8X0fTJRsvh7lrNmHxaIQwlPG9Td8vcDqmra/2cSknimQyvmrx08K4IJk3tcHXJhVZJ7C2lPx2211BXPy60037Fe7nS5wZXcSnqWcBTG/opQDd31VMUWgR9j9FqlHO0M7h1gdagTi2thdaXtuw/jjYJGzv5BcgAAAAASUVORK5CYII="/>
      </defs>
      <use  href="#img1" x="0" y="0" />
    </Svg>
  );
};

export default Icon;
