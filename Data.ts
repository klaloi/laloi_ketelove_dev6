// Data.ts
export type Page = {
  id: string;
  title: string;
  content: string;
  circle?: string;
  progress?: number;
  color?: string;
  description: string;
};

export const pages: Page[] = [
  {
    id: "security",
    title: "Security",
    content: "0 Open Issues",
    circle: "A",
    description: `
<p>Computer security, or cybersecurity, refers to the set of measures, practices, and technologies implemented to protect computer systems, networks, and data from any threat or attack.</p>

<p>Its goal is to ensure the confidentiality, integrity, and availability of information. Cybersecurity includes several aspects:</p>

<ul>
  <li><strong>Data protection:</strong> Preventing unauthorized access to sensitive information.</li>
  <li><strong>Attack prevention:</strong> Protecting systems against malware, ransomware, viruses, and intrusions.</li>
  <li><strong>Access control:</strong> Ensuring that only authorized individuals can access resources.</li>
  <li><strong>Network security:</strong> Detecting and preventing intrusions through the Internet or internal networks.</li>
  <li><strong>Vulnerability management:</strong> Identifying and fixing flaws in software and applications.</li>
  <li><strong>Training and awareness:</strong> Educating users on best practices to reduce risks related to human error.</li>
</ul>

<p>Computer security is crucial because a breach can lead to data theft, financial loss, or service interruptions.</p>`
  },
  {
    id: "reliability",
    title: "Reliability",
    content: "0 Open Issues",
    circle: "A",
    description: `
<p>Software reliability refers to a software’s ability to operate correctly and consistently according to its specifications, without errors, crashes, or unexpected behavior. It is essential to ensure that users can rely on the software in all situations, even under heavy load or exceptional conditions.</p>

<p>Good reliability involves several aspects:</p>

<ul>
  <li><strong>Stability:</strong> The software must remain functional over time without frequent interruptions or failures.</li>
  <li><strong>Fault tolerance:</strong> Ability to detect and handle internal errors to minimize the impact on the user.</li>
  <li><strong>Consistency of results:</strong> The same inputs should always produce the same outputs, ensuring data consistency.</li>
  <li><strong>Robustness:</strong> The software should handle exceptional situations, such as user errors or hardware malfunctions, correctly.</li>
  <li><strong>Rigorous testing:</strong> Reliability is often guaranteed through unit, integration, and load testing to detect and fix defects before production.</li>
  <li><strong>Proactive maintenance:</strong> Regular updates and patches improve reliability by fixing bugs and optimizing performance.</li>
  <li><strong>Documentation and tracking:</strong> Good documentation of features and errors helps quickly understand and resolve any potential issues.</li>
</ul>

<p>Software reliability is especially critical in sensitive fields such as healthcare, finance, embedded systems, or aviation, where a failure can have serious consequences. Investing in reliability reduces costs related to errors and downtime and improves user trust and the company’s reputation.</p>`
  },
  {
    id: "maintainability",
    title: "Maintainability",
    content: "1 Open Issue",
    circle: "A",
    description: `
<p>Software maintainability refers to how easily it can be modified to fix defects, improve performance, or adapt to new requirements. It is a key aspect of software quality, as software that is difficult to maintain leads to high costs and an increased risk of bugs during updates.</p>

<p>Good maintainability is based on several principles:</p>

<ul>
  <li><strong>Clear code:</strong> Code must be readable, well-structured, and understandable so that developers can quickly identify and fix issues.</li>
  <li><strong>Comprehensive documentation:</strong> Features, algorithms, and dependencies must be well documented to simplify changes and avoid errors.</li>
  <li><strong>Modularity:</strong> Dividing the software into independent, reusable components limits the impact of changes and simplifies testing.</li>
  <li><strong>Standardization:</strong> Following coding conventions and best practices allows teams to work consistently and efficiently.</li>
  <li><strong>Automated testing:</strong> Unit and integration tests ensure that modifications do not introduce regressions.</li>
  <li><strong>Regular refactoring:</strong> Reviewing and improving existing code to reduce complexity and eliminate duplication contributes to better maintainability.</li>
</ul>

<p>In short, maintainable software is easier to evolve, less costly to manage, and allows development teams to respond quickly to changing user and market needs while minimizing the risk of errors.</p>`
  },
  {
    id: "accepted",
    title: "Accepted Issues",
    content: "0-Valid issues not fixed",
    circle: "⏰",
    description: `
<p>"Accepted issues" refer to problems or anomalies that have been identified but intentionally left uncorrected. These issues are acknowledged by the development team as existing defects but do not significantly affect the overall operation of the software.</p>

<p>Reasons for not immediately fixing some issues may include:</p>

<ul>
  <li><strong>Limited impact:</strong> The problem affects only a small number of users or has no critical consequences for the system.</li>
  <li><strong>Development priorities:</strong> Resources are dedicated to more critical bugs or new features.</li>
  <li><strong>Complexity of the fix:</strong> Resolving the issue may require major changes with a high risk of introducing other bugs.</li>
  <li><strong>Future planning:</strong> Some issues are scheduled to be fixed in a future update or major release.</li>
</ul>

<p>Documenting these accepted issues allows teams to:</p>
<ul>
  <li>Maintain a history of bugs and their handling.</li>
  <li>Guide decisions on future priorities.</li>
  <li>Provide users and internal teams with transparency about the known state of the software.</li>
</ul>

<p>In summary, accepted issues are a quality management tool that helps balance bug fixing with strategic planning and efficient resource allocation.</p>`
  },
  {
    id: "coverage",
    title: "Coverage",
    content: "97.1% on 552 lines",
    progress: 0.971,
    color: "#4CAF50",
    description: `
<p>Test coverage indicates the proportion of source code executed by automated tests. It measures how thoroughly the code is tested and directly contributes to the quality and reliability of the software.</p>

<p>Good test coverage provides several benefits:</p>

<ul>
  <li><strong>Early bug detection:</strong> The more code is tested, the earlier errors are discovered before they affect users.</li>
  <li><strong>Reduced regressions:</strong> Automated tests ensure that new changes do not introduce issues in existing features.</li>
  <li><strong>Living documentation:</strong> Tests also serve as documentation of the software’s expected behavior.</li>
  <li><strong>Increased confidence:</strong> High coverage allows development teams and stakeholders to feel more confident in the software’s stability.</li>
  <li><strong>Easier maintenance:</strong> During updates or refactoring, tests ensure that the code continues to work correctly.</li>
</ul>

<p>It is important to note that 100% coverage does not guarantee the complete absence of bugs, but it is an important indicator of software quality and robustness. Combining unit, integration, and functional tests helps achieve optimal coverage and significantly reduce risks.</p>`
  },
  {
    id: "duplications",
    title: "Duplications",
    content: "0.0% on 27 lines",
    progress: 0.0,
    color: "#f44336",
    description: `
<p>Code duplication refers to identical or very similar lines of code appearing in multiple parts of the software. These repetitions may occur when copying code blocks for reuse or due to a lack of proper refactoring.</p>

<p>Duplications present several issues:</p>

<ul>
  <li><strong>Difficult maintenance:</strong> Any modification or fix must be applied in multiple places, increasing the risk of errors or omissions.</li>
  <li><strong>Increased complexity:</strong> The more code is duplicated, the harder it becomes for developers to understand and maintain.</li>
  <li><strong>Bug risk:</strong> Inconsistencies may appear if some copies are modified while others are not.</li>
  <li><strong>Loss of time and efficiency:</strong> Developers spend more time managing duplications instead of creating new features or improving existing code.</li>
</ul>

<p>To improve software quality and reduce duplication:</p>

<ul>
  <li>Refactor code into reusable functions or modules.</li>
  <li>Adopt good object-oriented or functional programming practices.</li>
  <li>Conduct regular code reviews to detect and correct duplications.</li>
</ul>

<p>Reducing duplications leads to cleaner, easier-to-maintain code and more reliable, consistent software in the long run.</p>`
  }
];
