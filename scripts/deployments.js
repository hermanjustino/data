const deployments = [
    {
        id: "statera",
        title: "Statera",
        status: "Live / Active Development",
        cloudContext: "Azure (Azure AD, Key Vault, Blob Storage, Cognitive Search) · Self-Hosted PostgreSQL, Redis, ChromaDB",
        testConstraint: "Can we build a reliable AI-assisted financial document review platform — with annotation, ticking & tying, and multi-model AI orchestration — that financial professionals can trust in high-stakes audit workflows?",
        decisions: [
            {
                decision: "Hybrid Django + FastAPI ASGI Architecture",
                reason: "Django REST Framework handles core REST APIs and auth while FastAPI powers high-performance AI processing endpoints with async support for streaming responses (NDJSON) and batch processing. Both are mounted in a single ASGI process via Starlette, avoiding a full microservices split while preserving performance isolation for AI workloads."
            },
            {
                decision: "Five Specialized Celery Worker Queues",
                reason: "Heavy operations (PDF page processing, Tantivy indexing, SEC sync, table extraction, orchestration) are separated into dedicated workers with tuned concurrency levels. This prevents memory-intensive page processing from starving lightweight orchestration tasks, and isolates index write operations to a single worker."
            },
            {
                decision: "ChromaDB + Tantivy + Azure Cognitive Search (Tri-Search Stack)",
                reason: "Each engine handles a distinct search modality: ChromaDB for vector similarity over document embeddings, Tantivy for full-text search over SEC filings, and Azure Cognitive Search for structured issuer lookups. Co-locating all three avoids egress costs and keeps latency within acceptable bounds for real-time workflows."
            },
            {
                decision: "Azure Key Vault for Secret Management in Production",
                reason: "Financial document platforms operate under strict access control requirements. Centralising secrets in Key Vault enforces auditability and rotation without baking credentials into container images or environment files."
            }
        ],
        failureMode: "AI Confidence Miscalibration in High-Stakes Review",
        lesson: "In financial audit tooling, the system's failure modes are not technical outages but silent overconfidence — AI outputs that look correct but are wrong. The architecture must make uncertainty explicit and keep the human reviewer in the loop at every assertion boundary.",
        activeSite: "https://www.staterasuite.com/"
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
