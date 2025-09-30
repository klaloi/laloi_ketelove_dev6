// Data1.tsx
import React from "react";
import { Text, View } from "react-native";

export type Page = {
  id: string;
  title: string;
  content: string;
  circle?: string;
  progress?: number;
  color?: string;
  description: React.ReactNode;
};

export const pages: Page[] = [
  {
    id: "security",
    title: "Security",
    content: "0 Open Issues",
    circle: "A",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          Computer security, or cybersecurity, is the discipline that protects
          computer systems, networks, and digital assets from unauthorized access,
          damage, or disruption. It combines technologies, processes, and
          best-practice policies to create multiple layers of defense against
          evolving threats.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          The main objectives are to ensure the <Text style={{ fontWeight: "bold" }}>confidentiality</Text> of
          sensitive information, the <Text style={{ fontWeight: "bold" }}>integrity</Text> of data so it is not
          altered, and the <Text style={{ fontWeight: "bold" }}>availability</Text> of resources for authorized
          users at all times.
        </Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Data protection:</Text> Encrypting and backing up
          sensitive information to prevent leaks or loss.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Attack prevention:</Text> Using firewalls,
          intrusion-detection systems, and anti-malware tools to block
          ransomware, viruses, and zero-day exploits.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Access control:</Text> Implementing strong
          authentication (MFA) and least-privilege principles so only authorized
          personnel can reach critical resources.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Network security:</Text> Segmenting networks,
          monitoring traffic, and applying secure protocols to stop intrusions
          and eavesdropping.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Vulnerability management:</Text> Regularly scanning,
          patching, and updating software to eliminate exploitable weaknesses.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Training and awareness:</Text> Educating employees
          to recognize phishing, social engineering, and unsafe practices.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Incident response:</Text> Preparing plans to detect,
          contain, and recover quickly from security breaches or data loss.</Text>
        </View>
        <Text>
          Cybersecurity is a continuous process requiring monitoring, auditing,
          and improvement. A serious breach can result in data theft, regulatory
          fines, reputational harm, and significant financial loss, making robust
          security indispensable for any organization.
        </Text>
      </View>
    ),
  },
  {
    id: "reliability",
    title: "Reliability",
    content: "0 Open Issues",
    circle: "A",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          Software reliability is the capacity of an application to perform its
          intended functions accurately and consistently over time, under normal
          and extreme conditions. Reliable systems build user trust and reduce
          operational costs.
        </Text>
        <Text style={{ marginBottom: 10 }}>Key pillars of reliability include:</Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Stability:</Text> The ability to run continuously
          without crashes, leaks, or unexpected shutdowns.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Fault tolerance:</Text> Detecting, isolating, and
          recovering from internal errors so service remains available.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Consistency of results:</Text> Guaranteeing that
          identical inputs always yield identical outputs, regardless of load.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Robust testing:</Text> Automated and stress testing
          to validate performance under peak traffic or hardware failures.</Text>
        </View>
        <Text>
          Industries like healthcare, aviation, finance, and embedded systems
          demand near-perfect reliability, where downtime can endanger lives or
          incur massive financial penalties. Investing in robust design,
          monitoring, and proactive maintenance ensures long-term dependability.
        </Text>
      </View>
    ),
  },
  {
    id: "maintainability",
    title: "Maintainability",
    content: "1 Open Issue",
    circle: "A",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          Maintainability describes how easily software can be modified to fix
          defects, enhance performance, or adapt to changing requirements.
          High-maintainability systems lower costs and enable rapid evolution.
        </Text>
        <Text style={{ marginBottom: 10 }}>Important principles include:</Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Clear code:</Text> Readable naming, consistent
          style, and modular architecture simplify understanding.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Comprehensive documentation:</Text> Up-to-date API
          docs, diagrams, and inline comments guide future developers.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Modularity:</Text> Independent, reusable
          components limit the ripple effect of changes and ease testing.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Automated testing & CI/CD:</Text> Ensures that
          updates do not introduce regressions.</Text>
        </View>
        <Text>
          Software with strong maintainability adapts quickly to new business
          needs, extends product life, and reduces the risk of introducing
          critical bugs during upgrades.
        </Text>
      </View>
    ),
  },
  {
    id: "accepted",
    title: "Accepted Issues",
    content: "0 Valid issues not fixed",
    circle: "⏰",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          “Accepted issues” are known defects acknowledged by the team but left
          unfixed because they pose minimal impact or fixing them would be
          disproportionately costly.
        </Text>
        <Text style={{ marginBottom: 10 }}>Common reasons include:</Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Limited impact:</Text> Affecting few users or
          non-critical features.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Development priorities:</Text> Resources focus on
          higher-value features or urgent defects.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Complexity of the fix:</Text> Risk of introducing
          larger problems than the issue itself.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Future planning:</Text> Scheduled for resolution in
          a major upcoming release.</Text>
        </View>
        <Text>
          Documenting accepted issues keeps teams transparent, aids
          decision-making for future sprints, and ensures users are aware of
          known trade-offs in the current release.
        </Text>
      </View>
    ),
  },
  {
    id: "coverage",
    title: "Coverage",
    content: "97.1% on 552 lines",
    progress: 0.971,
    color: "#4CAF50",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          Test coverage measures the percentage of source code executed by
          automated tests. High coverage builds confidence that most paths are
          validated.
        </Text>
        <Text style={{ marginBottom: 10 }}>Benefits of strong coverage:</Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Early bug detection:</Text> Find defects before
          they reach production.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Reduced regressions:</Text> Prevent new changes
          from breaking existing functionality.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Confidence in refactoring:</Text> Developers can
          improve code safely.</Text>
        </View>
        <Text>
          Although 100% coverage does not guarantee a bug-free product, combining
          unit, integration, and end-to-end tests greatly improves software
          quality and reliability.
        </Text>
      </View>
    ),
  },
  {
    id: "duplications",
    title: "Duplication",
    content: "0.0% on 27 lines",
    progress: 0.0,
    color: "#f44336",
    description: (
      <View>
        <Text style={{ marginBottom: 10 }}>
          Code duplication occurs when identical or similar code fragments appear
          in multiple places. This often results from copy-paste practices or
          rushed development.
        </Text>
        <Text style={{ marginBottom: 10 }}>Risks of duplication:</Text>
        <View style={{ paddingLeft: 16, marginBottom: 10 }}>
          <Text>• <Text style={{ fontWeight: "bold" }}>Harder maintenance:</Text> Every fix or
          improvement must be applied in several spots.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Higher complexity:</Text> Larger codebases are
          harder to read and test.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Bug risk:</Text> Inconsistent updates create
          subtle errors.</Text>
          <Text>• <Text style={{ fontWeight: "bold" }}>Reduced efficiency:</Text> Developers spend extra
          time managing repetitive code instead of adding value.</Text>
        </View>
        <Text>
          Encouraging refactoring, reusable components, and code reviews helps
          maintain a clean, DRY (Don’t Repeat Yourself) codebase.
        </Text>
      </View>
    ),
  },
];
