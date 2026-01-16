const deployments = [
    {
        id: "flattened-english",
        title: "AI Cultural Journalist",
        status: "Live / Iterating",
        cloudContext: "Google Cloud (Cloud Run Jobs, BigQuery, Vertex AI, Terraform)",
        testConstraint: "Can we quantify how AI-mediated platforms impose uneven linguistic labor on non-standard English speakers without relying on black-box commercial APIs?",
        decisions: [
            {
                decision: "Serverless Event-Driven Architecture (Cloud Run Jobs)",
                reason: "Chosen over Cloud Functions to handle long-running scraping tasks (TikTok comments, academic papers) without hitting 9-minute execution timeouts."
            },
            {
                decision: "BigQuery as Central Warehouse & ML Engine",
                reason: "Chosen to co-locate compute and storage. BigQuery ML runs regression models directly on the data, eliminating egress costs and latency associated with moving data to separate notebooks."
            },
            {
                decision: "Terraform for Infrastructure as Code",
                reason: "Strict adherence to IAM Least Privilege and reproducibility. In sociotechnical research, the audit infrastructure itself must be auditable."
            }
        ],
        failureMode: "Algorithmic Drift & API Rate Limits",
        lesson: "In sociotechnical audits, infrastructure integrity is part of the scientific method; if the rig (scraper/pipeline) isn't reproducible, the social finding is invalid.",
        githubLink: "https://github.com/hermanjustino/flattened-english",
        activeSite: "https://flat-eng.info"
    },
    {
        id: "clinical-flow",
        title: "Clinical Flow",
        status: "Prototype / Research",
        cloudContext: "Google Cloud (Cloud Run, Vertex AI MedLM, Cloud DLP, GCS)",
        testConstraint: "Can we generate structured clinical documentation from real-time ambient conversation while satisfying Canadian PIPEDA/PHIPA data residency laws?",
        decisions: [
            {
                decision: "Split-Region Architecture (Canada/US)",
                reason: "Data residency is a hard constraint. GCS and Cloud DLP stay in `northamerica-northeast1` (Montreal) for compliance, while summarization momentarily dips into `us-central1` for MedLM availability, with strict de-identification happening *before* egress."
            },
            {
                decision: "WebSockets on Cloud Run (not Functions)",
                reason: "Chosen to support real-time bidirectional audio streaming (`socket.io`). Stateless Cloud Functions cannot maintain the persistent connections required for live transcription."
            },
            {
                decision: "Cloud DLP Integration",
                reason: "De-identification is handled as an infrastructure service, not application logic. This ensures a consistent privacy layer regardless of upstream changes in the summarization model."
            }
        ],
        failureMode: "Latency-Induced Clinician Distrust",
        lesson: "In high-stakes domains like healthcare, latency is a safety constraint. Compliance (Data Residency) often forces architectural compromises that must be managed with explicit boundaries (VPC Service Controls).",
        activeSite: "https://clinicalflow.org"
    }
];

function renderDeployments() {
    const container = document.getElementById("active-deployments-list");
    if (!container) return;

    container.innerHTML = "";

    deployments.forEach((dept) => {
        const item = document.createElement("div");
        item.className = "active-deployment-item";
        item.onclick = () => openDeploymentModal(dept);

        const titleH3 = document.createElement("h3");
        titleH3.textContent = dept.title;

        const statusP = document.createElement("p");
        statusP.innerHTML = `<strong>Status:</strong> ${dept.status} <br> <strong>Cloud Context:</strong> ${dept.cloudContext}`;

        const constraintP = document.createElement("p");
        constraintP.innerHTML = `${dept.testConstraint}`;

        // Add "Read more" hint
        const readMore = document.createElement("small");
        readMore.className = "read-more-hint";
        readMore.textContent = "View Architecture Decisions →";


        item.appendChild(titleH3);
        item.appendChild(statusP);
        item.appendChild(constraintP);
        item.appendChild(readMore);

        container.appendChild(item);
    });
}

function openDeploymentModal(dept) {
    const modal = document.getElementById("deployment-modal");
    const closeBtn = modal.querySelector(".close");

    document.getElementById("dept-modal-title").textContent = dept.title;
    document.getElementById("dept-modal-status").innerHTML = `<strong>Status:</strong> ${dept.status}`;
    document.getElementById("dept-modal-cloud").innerHTML = `<strong>Cloud Context:</strong> ${dept.cloudContext}`;
    document.getElementById("dept-modal-constraint").innerHTML = `<strong>Test Constraint:</strong> ${dept.testConstraint}`;

    const decisionsList = document.getElementById("dept-modal-decisions");
    decisionsList.innerHTML = "";
    dept.decisions.forEach(d => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${d.decision}</strong> → ${d.reason}`;
        decisionsList.appendChild(li);
    });

    document.getElementById("dept-modal-failure").innerHTML = `<strong>Failure Mode Considered:</strong> ${dept.failureMode}`;
    document.getElementById("dept-modal-lesson").innerHTML = `<strong>Key Lesson:</strong> ${dept.lesson}`;

    // Github Link
    const ghLink = document.getElementById("dept-modal-github");
    if (dept.githubLink) {
        ghLink.href = dept.githubLink;
        ghLink.style.display = "inline-block";
    } else {
        ghLink.style.display = "none";
    }

    // Active Site Link
    const siteLink = document.getElementById("dept-modal-site");
    if (dept.activeSite) {
        siteLink.href = dept.activeSite;
        siteLink.style.display = "inline-block";
    } else {
        siteLink.style.display = "none";
    }

    modal.style.display = "flex";

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

document.addEventListener("DOMContentLoaded", renderDeployments);
