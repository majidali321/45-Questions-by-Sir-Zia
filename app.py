{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyON+D8L5GSySYC3oUpEFVXF",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/majidali321/45-Questions-by-Sir-Zia/blob/main/app.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "PvI-YUTyBFSu"
      },
      "outputs": [],
      "source": [
        "# Imports\n",
        "import streamlit as st\n",
        "import pandas as pd\n",
        "import os\n",
        "from io import BytesIO\n",
        "\n",
        "# Set up our App\n",
        "st.set_page_config(page_title=\"Data sweeper\", layout='wide')\n",
        "st.title(\"Data sweeper\")\n",
        "st.write(\"Transform your files between CSV and Excel formats with built-in data cleaning and visualization!\")\n",
        "uploaded_files = st.file_uploader(\"Upload your files (CSV or Excel):\", type=[\"csv\",\"xlsx\"], accept_multiple_files=True)\n",
        "\n",
        "if uploaded_files:\n",
        "    for file in uploaded_files:\n",
        "        file_ext = os.path.splitext(file.name)[-1].lower()\n",
        "\n",
        "        if file_ext == \".csv\":\n",
        "            df = pd.read_csv(file)\n",
        "        elif file_ext == \".xlsx\":\n",
        "            df = pd.read_excel(file)\n",
        "        else:\n",
        "            st.error(f\"Unsupported file type: {file_ext}\")\n",
        "            continue\n",
        "\n",
        "        # Display info about the file\n",
        "        st.write(f\"**File Name:** {file.name}\")\n",
        "        st.write(f\"**File Size:** {file.size / 1024:.2f} KB\")\n",
        "\n",
        "        # Show 5 rows of our df\n",
        "        st.write(\"Preview the Head of the Dataframe\")\n",
        "        st.dataframe(df.head())\n",
        "\n",
        "        # Options for data Cleaning\n",
        "        st.subheader(\"Data Cleaning Options\")\n",
        "        if st.checkbox(f\"Clean Data for {file.name}\"):\n",
        "            col1, col2 = st.columns(2)\n",
        "\n",
        "            with col1:\n",
        "                if st.button(f\"Remove Duplicates from {file.name}\"):\n",
        "                    df.drop_duplicates(inplace=True)\n",
        "                    st.write(\"Duplicates Removed!\")\n",
        "\n",
        "            with col2:\n",
        "                if st.button(f\"Fill Missing Values for {file.name}\"):\n",
        "                    numeric_cols = df.select_dtypes(include={'number'}).columns\n",
        "                    df[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].mean())\n",
        "                    st.write(\"Missing Values have been Filled!\")\n",
        "\n",
        "        # Choose Specific Columns to Keep or Convert\n",
        "        st.subheader(\"Select Columns to Convert\")\n",
        "        columns = st.multiselect(f\"Choose Columns for {file.name}\", df.columns, default=df.columns)\n",
        "        df = df[columns]\n",
        "\n",
        "        # Create Some Visualizations\n",
        "        st.subheader(\"**Data Visualization**\")\n",
        "        if st.checkbox(f\"Show Visualization for {file.name}\"):\n",
        "            st.bar_chart(df.select_dtypes(include='number').iloc[:, :2])\n",
        "\n",
        "        # Convert the File -> CSV to Excel\n",
        "        st.subheader(\"**Conversion Options**\")\n",
        "        conversion_type = st.radio(f\"Convert {file.name} to:\", [\"CSV\", \"Excel\"], key=file.name)\n",
        "        if st.button(f\"Convert {file.name}\"):\n",
        "            buffer = BytesIO()\n",
        "            if conversion_type == \"CSV\":\n",
        "                df.to_csv(buffer, index=False)\n",
        "                file_name = file.name.replace(file_ext, \".csv\")\n",
        "                mime_type = \"text/csv\"\n",
        "            elif conversion_type == \"Excel\":\n",
        "                df.to_excel(buffer, index=False)\n",
        "                file_name = file.name.replace(file_ext, \".xlsx\")\n",
        "                mime_type = \"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\"\n",
        "            buffer.seek(0)\n",
        "\n",
        "            # Download Button\n",
        "            st.download_button(\n",
        "                label=f\"Download {file.name} as {conversion_type}\",\n",
        "                data=buffer,\n",
        "                file_name=file_name,\n",
        "                mime=mime_type\n",
        "            )\n",
        "            st.success(\"All files processed\")"
      ]
    }
  ]
}